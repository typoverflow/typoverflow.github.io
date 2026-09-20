(() => {
  'use strict';
  const host = document.getElementById('visitors');
  if (!host) return;
  const canvas = document.getElementById('visitor-globe');
  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const rad = Math.PI / 180;
  let lon = -25 * rad, lat = 16 * rad, paused = reduced.matches;
  let points = [], coasts = [], markers = [], pointer = null, visible = false, frame = 0, last = 0;
  const vector = ([lng, latitude]) => {
    const c = Math.cos(latitude * rad);
    return [c * Math.sin(lng * rad), Math.sin(latitude * rad), c * Math.cos(lng * rad)];
  };
  const project = ([x, y, z]) => {
    const a = x * Math.cos(lon) - z * Math.sin(lon);
    const b = x * Math.sin(lon) + z * Math.cos(lon);
    return [300 + 258 * a, 300 - 258 * (y * Math.cos(lat) - b * Math.sin(lat)), y * Math.sin(lat) + b * Math.cos(lat)];
  };
  const grid = [];
  for (let latitude = -60; latitude <= 60; latitude += 30) {
    grid.push(Array.from({length: 121}, (_, i) => vector([-180 + i * 3, latitude])));
  }
  for (let lng = -180; lng < 180; lng += 45) {
    grid.push(Array.from({length: 61}, (_, i) => vector([lng, -90 + i * 3])));
  }
  function lines(paths, color) {
    ctx.strokeStyle = color; ctx.lineWidth = 0.8; ctx.beginPath();
    paths.forEach(path => {
      let connected = false;
      path.forEach(point => {
        const [x, y, z] = project(point);
        if (z <= 0) { connected = false; return; }
        if (connected) ctx.lineTo(x, y); else ctx.moveTo(x, y);
        connected = true;
      });
    });
    ctx.stroke();
  }
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath(); ctx.arc(300, 300, 258, 0, Math.PI * 2);
    ctx.fillStyle = '#f8fafb'; ctx.fill(); ctx.strokeStyle = '#dee5e9'; ctx.stroke();
    lines(grid, '#e1e7eb'); lines(coasts, '#9aadb9');
    points.forEach(point => {
      const [x, y, z] = project(point);
      if (z <= 0) return;
      ctx.fillStyle = `rgba(78,109,128,${0.25 + z * 0.5})`;
      ctx.beginPath(); ctx.arc(x, y, 1.15, 0, Math.PI * 2); ctx.fill();
    });
    markers.forEach(point => {
      const [x, y, z] = project(point);
      if (z <= 0) return;
      ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#0069d9'; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    });
  }
  function tick(time) {
    frame = 0;
    if (!visible || document.hidden || paused || pointer) { last = 0; return; }
    if (last) lon += Math.min(time - last, 50) * 0.00007;
    last = time; draw(); frame = requestAnimationFrame(tick);
  }
  function wake() { draw(); if (!frame) frame = requestAnimationFrame(tick); }
  function updatePause() { wake(); }
  reduced.addEventListener('change', event => { paused = event.matches; updatePause(); });
  canvas.addEventListener('pointerdown', event => {
    if (pointer || event.button !== 0) return;
    pointer = {id: event.pointerId, x: event.clientX, y: event.clientY}; canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    lon -= (event.clientX - pointer.x) * 0.008;
    lat = Math.max(-1.3, Math.min(1.3, lat + (event.clientY - pointer.y) * 0.008));
    pointer.x = event.clientX; pointer.y = event.clientY; draw();
  });
  const release = () => { pointer = null; wake(); };
  canvas.addEventListener('lostpointercapture', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Home'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === ' ') { paused = !paused; updatePause(); }
    if (event.key === 'Home') { lon = -25 * rad; lat = 16 * rad; }
    if (event.key === 'ArrowLeft') lon += 0.12;
    if (event.key === 'ArrowRight') lon -= 0.12;
    if (event.key === 'ArrowUp') lat -= 0.12;
    if (event.key === 'ArrowDown') lat += 0.12;
    lat = Math.max(-1.3, Math.min(1.3, lat)); draw();
  });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; wake(); }).observe(canvas);
  document.addEventListener('visibilitychange', wake);
  fetch(host.dataset.geography).then(response => {
    if (!response.ok) throw new Error('Geography unavailable');
    return response.json();
  }).then(data => { points = data.points.map(vector); coasts = data.coasts.map(path => path.map(vector)); wake(); })
    .catch(() => { canvas.setAttribute('aria-label', 'World map unavailable'); });
  updatePause();
  async function loadStats() {
    if (!host.dataset.statsUrl) return;
    const base = host.dataset.statsUrl;
    const options = {credentials: 'omit', cache: 'no-store', signal: AbortSignal.timeout(8000)};
    try {
      let counted = false;
      try { counted = sessionStorage.getItem('visitor-counted:' + base) === '1'; } catch (_) {}
      if (!counted) {
        const hit = await fetch(new URL('/hit', base), {...options, method: 'POST'});
        if (!hit.ok) throw new Error('Visit unavailable');
        try { sessionStorage.setItem('visitor-counted:' + base, '1'); } catch (_) {}
      }
      const response = await fetch(new URL('/stats', base), {...options, signal: AbortSignal.timeout(8000)});
      if (!response.ok) throw new Error('Statistics unavailable');
      const data = await response.json();
      if (!Number.isFinite(data.visits) || !Number.isFinite(data.countryCount)) throw new Error('Invalid statistics');
      document.getElementById('visitor-count').textContent = data.visits.toLocaleString('en-US');
      document.getElementById('visitor-countries').textContent = data.countryCount.toLocaleString('en-US');
      markers = (data.regions || []).filter(r => Number.isFinite(r.lng) && Number.isFinite(r.lat)).map(r => vector([r.lng, r.lat]));
      draw();
    } catch (_) { /* Keep counts blank when statistics are unavailable. */ }
  }
  loadStats();
})();
