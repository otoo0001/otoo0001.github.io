const q=s=>document.querySelector(s);document.title=`Dr Nicole Gyakowah Otoo | Hydrologist`;q('#year').textContent=new Date().getFullYear();
q('#publication-list').innerHTML=SITE_CONTENT.publications.map(p=>`<article class="pub"><div><span>${p.year}</span><small>${p.type}</small></div><div><h3>${p.title}</h3><p>${p.authors}</p><b>${p.venue}</b></div><a href="${p.url}" aria-label="Open publication">↗</a></article>`).join('');
q('#conference-list').innerHTML=SITE_CONTENT.conferences.map(c=>`<article class="event"><div><b>${c.year}</b><span>${c.event}</span></div><h3>${c.title}</h3><a href="${c.url}">Abstract & DOI ↗</a></article>`).join('');
q('#experience-list').innerHTML=SITE_CONTENT.experience.map(e=>`<article class="timeline"><p>${e.period}</p><div><h3>${e.role}</h3><b>${e.place}</b><p>${e.text}</p></div></article>`).join('');
q('#post-list').innerHTML=SITE_CONTENT.posts.map(p=>`<article><span>${p.date}</span><h3>${p.title}</h3><p>${p.text}</p></article>`).join('');
if(SITE_CONTENT.github){const g=q('#github-link');g.href=SITE_CONTENT.github;g.hidden=false}
