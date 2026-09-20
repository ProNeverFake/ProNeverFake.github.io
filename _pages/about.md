---
permalink: /
title: "Jicong Ao"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include page-toc.html %}

<section id="about" class="home-section" markdown="1">

I am a Research Engineer in the Humanoid Robot Group at the AI Institute of Chinatelecom (TeleAI) in Shanghai. My research focuses on robot learning and task and motion planning, with current work on simulation foundations for robot manipulation.

At TeleAI, I lead the simulation team developing scene, articulated-object, task, and demonstration generation for manipulation data production and sim-to-real policy transfer. My experience also includes agentic vision-language-action model deployment, robot control systems, LLM-based behavior tree generation, robot assembly, and robot milling.

</section>

<section class="home-section home-section--education" markdown="1">

<h2 id="education">Education</h2>

<div class="home-entry home-entry--with-logo">
<h3>M.Sc. in Mechanical Engineering</h3>
<p class="home-entry__meta">Technical University of Munich, Munich, Germany<br>04.2021 - 10.2024</p>
<p class="home-entry__fields">Fields: robot learning and task and motion planning</p>
<img class="home-entry__logo" src="/images/logos/tum.png" alt="TUM logo" loading="lazy">
</div>

<div class="home-entry home-entry--with-logo">
<h3>B.Sc. in Industrial Engineering</h3>
<p class="home-entry__meta">Beijing Institute of Technology, Beijing, China<br>09.2016 - 08.2020</p>
<p class="home-entry__fields">Field: production planning and optimization</p>
<img class="home-entry__logo" src="/images/logos/bit.png" alt="BIT logo" loading="lazy">
</div>

</section>

<section id="work-gallery" class="home-section home-section--work-gallery" markdown="1">

<h2>Work Gallery</h2>

<div class="work-gallery">
{% for item in site.data.work_gallery %}
<article class="work-gallery__item{% if item.centered %} work-gallery__item--centered{% endif %}">
  <video autoplay muted loop playsinline controls preload="metadata" aria-label="{{ item.title }}">
    <source src="{{ item.video | relative_url }}" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
  <div class="work-gallery__body">
    <span class="work-gallery__project">{{ item.project }}</span>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    {% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">Project</a>{% endif %}
  </div>
</article>
{% endfor %}
</div>

</section>

<section class="home-section" markdown="1">

<h2 id="projects">Projects</h2>

<div class="home-list">
{% assign projects = site.portfolio | sort: "order" %}
{% for post in projects %}
  {% include project-single.html %}
{% endfor %}
</div>

</section>

<section class="home-section" markdown="1">

<h2 id="publications">Publications</h2>

{% assign publications = site.publications | sort: "sort_order" %}
<div class="home-list publication-list">
{% for post in publications %}
  {% include publication-single.html %}
{% endfor %}
</div>

</section>

<section class="home-section home-section--experience" markdown="1">

<h2 id="experience">Experience</h2>

<div class="home-entry home-entry--with-logo">
<h3>Research Engineer, Humanoid Robot Group</h3>
<p class="home-entry__meta">AI Institute of Chinatelecom (TeleAI), Shanghai<br>12.2024 - Present</p>
<img class="home-entry__logo" src="/images/logos/teleai.png" alt="TeleAI logo" loading="lazy">
</div>

<div class="home-entry home-entry--with-logo">
<h3>Research Intern, Embodied AI Group</h3>
<p class="home-entry__meta">MEGVII Research (MEGVII Technology), Beijing<br>07.2024 - 11.2024</p>
<img class="home-entry__logo" src="/images/logos/megvii.png" alt="MEGVII logo" loading="lazy">
</div>

<div class="home-entry home-entry--with-logo">
<h3>Research Intern &amp; Thesis Student, Collective Learning Group</h3>
<p class="home-entry__meta">Munich Institute of Robotics and Machine Intelligence (MIRMI), Munich<br>10.2022 - 06.2024</p>
<img class="home-entry__logo" src="/images/logos/mirmi.png" alt="MIRMI logo" loading="lazy">
</div>

<div class="home-entry home-entry--with-logo">
<h3>Thesis Student, Robotic Processing Group</h3>
<p class="home-entry__meta">Institute for Machine Tools and Industrial Management (IWB), Munich<br>06.2022 - 10.2022</p>
<img class="home-entry__logo" src="/images/logos/iwb.png" alt="IWB logo" loading="lazy">
</div>

<div class="home-entry home-entry--with-logo">
<h3>Design and Manufacturing Engineer, Technical Department</h3>
<p class="home-entry__meta">EDDIE Precision Machinery Co, ltd, Yantai<br>10.2020 - 04.2021</p>
<img class="home-entry__logo" src="/images/logos/eddie.png" alt="EDDIE logo" loading="lazy">
</div>

</section>
