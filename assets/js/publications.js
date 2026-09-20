(() => {
  const filter = document.querySelector('.publication-filter');
  if (!filter) return;
  const cards = [...document.querySelectorAll('.publication-card')];
  const groups = [...document.querySelectorAll('.publication-group')];
  const chips = [...document.querySelectorAll('.topic-chip')];
  const topics = [...document.querySelectorAll('.paper-topic')];
  const years = [...document.querySelectorAll('.publication-years a')];
  const status = document.getElementById('publication-status');
  const clear = document.querySelector('.filter-clear');
  const active = new Set();
  const matches = (card, selected) => [...selected].every(topic => card.dataset.topics.split('|').includes(topic));
  function updateYear() {
    const visible = groups.filter(group => !group.hidden);
    const offset = window.innerWidth > 767 ? filter.offsetHeight + 100 : 90;
    let current = visible[0];
    visible.forEach(group => { if (group.getBoundingClientRect().top <= offset) current = group; });
    years.forEach(link => {
      if (link.dataset.year === current?.dataset.year) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }
  function render() {
    cards.forEach(card => { card.hidden = !matches(card, active); });
    groups.forEach(group => {
      group.hidden = ![...group.querySelectorAll('.publication-card')].some(card => !card.hidden);
      years.find(link => link.dataset.year === group.dataset.year).hidden = group.hidden;
    });
    chips.forEach(chip => {
      const topic = chip.dataset.topic;
      const selected = topic === 'all' ? active.size === 0 : active.has(topic);
      const count = topic === 'all' ? cards.length : cards.filter(card => matches(card, new Set([...active, topic]))).length;
      chip.setAttribute('aria-pressed', String(selected));
      chip.disabled = !selected && count === 0;
      chip.querySelector('.topic-count').textContent = count;
    });
    topics.forEach(button => { button.disabled = false; button.setAttribute('aria-pressed', String(active.has(button.dataset.topic))); });
    const count = cards.filter(card => !card.hidden).length;
    status.textContent = active.size ? `${count} ${count === 1 ? 'paper' : 'papers'} · ${[...active].join(' + ')}` : '';
    clear.hidden = active.size === 0;
    updateYear();
  }
  function toggle(topic) {
    if (topic === 'all') active.clear();
    else if (active.has(topic)) active.delete(topic);
    else active.add(topic);
    render();
  }
  chips.forEach(chip => chip.addEventListener('click', () => toggle(chip.dataset.topic)));
  topics.forEach(button => button.addEventListener('click', () => {
    toggle(button.dataset.topic);
    document.querySelector('.publication-heading').scrollIntoView({block: 'start'});
  }));
  clear.addEventListener('click', () => { active.clear(); render(); chips[0].focus(); });
  filter.hidden = false;
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--publication-filter-height', `${filter.offsetHeight + 16}px`);
  }).observe(filter);
  window.addEventListener('scroll', updateYear, {passive: true});
  render();
})();
