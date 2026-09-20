---
layout: profile
visitor_globe: true
last_updated: 2026-09-20
permalink: /
title: "Chenxiao Gao"
excerpt: "Ph.D. student at Georgia Tech researching reinforcement learning, representation learning, and generative models."
redirect_from:
  - /about/
  - /about.html
---

<section class="card profile-card" id="about-me" markdown="1">
<img class="portrait" src="{{ site.author.avatar | relative_url }}" alt="Portrait of {{ site.author.name }}" width="200" height="200">
<h1>{{ site.author.name }}</h1>
<p class="affiliation"><img class="inline-logo" src="{{ '/images/logos/georgia-tech.svg' | relative_url }}" alt=""> Georgia Institute of Technology</p>

I am a Machine Learning Ph.D. student at Georgia Institute of Technology, advised by [Prof. Bo Dai](https://bo-dai.github.io/). I am fortunate to collaborate with [Prof. Na Li](https://nali.seas.harvard.edu/) and the students in her group at Harvard University. Before starting my Ph.D., I received my bachelor's and master's degrees from Nanjing University, where I conducted research in the [LAMDA group](https://www.lamda.nju.edu.cn/).

My research focuses on **reinforcement learning (RL)** and **generative modeling**, with applications to **LLM agents** and **robotics**. My work spans three directions:

- **Efficient reinforcement learning:** Developing RL algorithms that improve efficiency through self-supervised learning and advances in generative model architectures.
- **Generative models and agents for robotics:** Developing foundational generative models and agentic systems for robotic learning and decision-making.
- **LLM and agent post-training:** Designing efficient post-training algorithms for large language models and interactive agents.

Feel free to contact me if you are interested in my research!

<div class="profile-links">
  <a class="contact-icon" href="mailto:{{ site.author.email }}" aria-label="Email: {{ site.author.email }}" title="{{ site.author.email }}"><span class="icon icon-email" aria-hidden="true"></span></a>
  <a class="contact-icon" href="{{ site.author.googlescholar }}" aria-label="Google Scholar" title="Google Scholar"><span class="icon icon-scholar" aria-hidden="true"></span></a>
  <a class="contact-icon" href="https://github.com/{{ site.author.github }}" aria-label="GitHub" title="GitHub"><span class="icon icon-github" aria-hidden="true"></span></a>
  <a class="contact-icon" href="https://www.linkedin.com/in/{{ site.author.linkedin }}/" aria-label="LinkedIn" title="LinkedIn"><span class="icon icon-linkedin" aria-hidden="true"></span></a>
  <a class="contact-icon" href="https://x.com/{{ site.author.twitter }}" aria-label="X: @{{ site.author.twitter }}" title="X: @{{ site.author.twitter }}"><svg class="icon-x" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg></a>
  <a class="contact-icon" href="{{ '/cv.pdf' | relative_url }}" aria-label="Curriculum vitae (PDF)" title="CV (PDF)"><span class="icon icon-cv" aria-hidden="true"></span></a>
  <span class="last-updated">Last updated on <time datetime="{{ page.last_updated | date: '%Y-%m-%d' }}">{{ page.last_updated | date: '%Y-%m' }}</time></span>
</div>
</section>

<section class="card news-card" id="-news" aria-labelledby="news-heading">
<h2 id="news-heading">News</h2>
<div class="news-body">
  <div class="news-year-group">
    <div class="news-year">2026</div>
    <ul class="news-items">
      <li class="news-item">
        <div><img class="news-emoji" src="{{ '/images/emoji/party-popper.svg' | relative_url }}" alt="🎉"> We released <a href="https://rle-bench.github.io/">RLE-Bench</a>, a benchmark evaluating coding agents as robot learning engineers. Read our <a href="https://rle-bench.github.io/blog/">research blog</a> and the <a href="https://seas.harvard.edu/news/can-your-ai-engineer-robot">Harvard SEAS news coverage</a>.</div>
        <time datetime="2026-09">Sep</time>
      </li>
      <li class="news-item">
        <div><img class="news-emoji" src="{{ '/images/emoji/round-pushpin.svg' | relative_url }}" alt="📍"> I moved to Boston and joined <a href="https://nali.seas.harvard.edu/">Prof. Na Li’s group</a> at Harvard University as a Research Fellow!</div>
        <time datetime="2026-05">May</time>
      </li>
    </ul>
  </div>
</div>
</section>

<div class="card background-card">
<section class="institution-column" id="-educations" aria-labelledby="education-heading">
<h2 id="education-heading">Education</h2>
<div class="institution-list">
  <div class="institution-item">
    <img class="institution-logo" src="{{ '/images/logos/georgia-tech.svg' | relative_url }}" alt="Georgia Tech logo">
    <div class="institution-details">
      <div class="institution-name">Georgia Institute of Technology</div>
      <div class="institution-date"><em>Present</em></div>
      <div class="institution-description">ML Ph.D. student</div>
    </div>
  </div>
  <div class="institution-item">
    <img class="institution-logo" src="{{ '/images/logos/nanjing-university.svg' | relative_url }}" alt="Nanjing University logo">
    <div class="institution-details">
      <div class="institution-name">Nanjing University</div>
      <div class="institution-date"><em>2022 – 2025</em></div>
      <div class="institution-description">M.Sc. in Computer Science</div>
    </div>
  </div>
  <div class="institution-item">
    <img class="institution-logo" src="{{ '/images/logos/nanjing-university.svg' | relative_url }}" alt="Nanjing University logo">
    <div class="institution-details">
      <div class="institution-name">Nanjing University</div>
      <div class="institution-date"><em>2018 – 2022</em></div>
      <div class="institution-description">B.Sc. in Computer Science</div>
    </div>
  </div>
</div>
</section>
<section class="institution-column" id="experience" aria-labelledby="experience-heading">
<h2 id="experience-heading">Experience</h2>
<div class="institution-list">
  <div class="institution-item">
    <img class="institution-logo" src="{{ '/images/logos/harvard.png' | relative_url }}" alt="Harvard University logo">
    <div class="institution-details">
      <div class="institution-name">Harvard University</div>
      <div class="institution-role"><span>Research Fellow</span><em class="institution-date">Jun. 2026 – Present</em></div>
      <div class="institution-description">Foundation models and agentic systems for robotics</div>
    </div>
  </div>
  <div class="institution-item">
    <img class="institution-logo" src="{{ '/images/logos/moonshot.svg' | relative_url }}" alt="Moonshot AI logo">
    <div class="institution-details">
      <div class="institution-name">Moonshot.AI</div>
      <div class="institution-role"><span>Research Intern</span><em class="institution-date">Jun. – Aug. 2025</em></div>
      <div class="institution-description">Agentic RL for Kimi-K2</div>
    </div>
  </div>
  <div class="institution-item">
    <img class="institution-logo" src="{{ '/images/logos/bytedance.png' | relative_url }}" alt="ByteDance logo">
    <div class="institution-details">
      <div class="institution-name">ByteDance</div>
      <div class="institution-role"><span>Research Intern</span><em class="institution-date">Jul. – Nov. 2021</em></div>
      <div class="institution-description">Reinforcement learning for Game AI</div>
    </div>
  </div>
</div>
</section>
</div>

<section class="card service-card" id="-academic-services" markdown="1">
## Academic Service

- Reviewer for conferences: ICML 2025-2026, NeurIPS 2025, ICLR 2025-2026, IJCAI 2025, AAAI 2025-2026, UAI 2025
- Reviewer for journals: TMLR
- Teaching Assistant: [CX4240 - Computing for Data Analysis](https://bo-dai.github.io/CX4240-spring2026/)

</section>


<div class="projects-visitors-card">
<section class="card projects-column" aria-labelledby="projects-heading">
<h2 id="projects-heading">Software / Projects</h2>
<ul class="project-list">
  <li><a href="https://rle-bench.github.io/">RLE-Bench <span aria-hidden="true">↗</span></a><p>A benchmark for evaluating coding agents as robot learning engineers.</p></li>
  <li><a href="https://github.com/typoverflow/flow-rl">Flow-RL <span aria-hidden="true">↗</span></a><p>A modular JAX framework for reinforcement learning with diffusion and flow policies.</p></li>
  <li><a href="https://spectral-rl.github.io/">Spectral-RL <span aria-hidden="true">↗</span></a><p>Spectral representations for reinforcement learning and downstream policy optimization.</p></li>
</ul>
</section>
<section class="card visitors-column" id="visitors" aria-labelledby="visitors-heading" data-geography="{{ '/assets/data/globe.json' | relative_url }}" data-stats-url="{{ site.visitor_stats_url | default: '' | escape }}">
<h2 id="visitors-heading">Visitors</h2>
<canvas id="visitor-globe" width="600" height="600" tabindex="0" role="img" aria-label="Interactive world globe. Drag or use arrow keys to rotate; press Space to pause or resume.">An interactive globe showing the world.</canvas>
<dl class="visitor-metrics"><div><dt>Visits</dt><dd id="visitor-count">—</dd></div><div><dt>Countries / regions</dt><dd id="visitor-countries">—</dd></div></dl>
<noscript><p class="visitor-status">Enable JavaScript to explore the globe.</p></noscript>
</section>
</div>
