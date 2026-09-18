const q=s=>document.querySelector(s);
q('#year').textContent=new Date().getFullYear();

const load=async(path,fallback=[])=>{try{const response=await fetch(path);if(!response.ok)throw new Error(path);return await response.json()}catch(error){console.warn(`Could not load ${path}`,error);return fallback}};

load('data/content.json',{}).then(content=>{
  const {site={},publications=[],conferences=[],experience=[],posts=[]}=content;
  document.title=`${site.name||'Nicole Gyakowah Otoo'} | ${site.shortTitle||'Postdoctoral Researcher'}`;
  if(site.role)q('#role').textContent=site.role;
  if(site.intro)q('#intro').textContent=site.intro;
  if(site.affiliation)q('#affiliation').textContent=site.affiliation;
  if(site.location)q('#location').textContent=site.location;
  if(site.orcid)q('#orcid-link').href=site.orcid;
  if(site.blogTitle)q('#blog-title').textContent=site.blogTitle;
  if(site.blogIntro)q('#blog-intro').textContent=site.blogIntro;
  if(site.profileImage){const photo=q('#profile-photo');photo.src=site.profileImage;photo.hidden=false;photo.onerror=()=>photo.hidden=true}
  if(site.email)q('.contact-links a[href^="mailto:"]').href=`mailto:${site.email}`;
  if(site.github){const link=q('#github-link');link.href=site.github;link.hidden=false}

  q('#publication-list').innerHTML=publications.map(p=>`<article class="pub"><div><span>${p.year}</span><small>${p.type}</small></div><div><h3>${p.title}</h3><p>${p.authors}</p><b>${p.venue}</b></div><a href="${p.url}" aria-label="Open publication">↗</a></article>`).join('');
  q('#conference-list').innerHTML=conferences.map(c=>`<article class="event"><div><b>${c.year}</b><span>${c.event}</span></div><h3>${c.title}</h3><a href="${c.url}">Abstract & DOI ↗</a></article>`).join('');
  q('#experience-list').innerHTML=experience.map(e=>`<article class="timeline"><p>${e.period}</p><div><h3>${e.role}</h3><b>${e.place}</b><p>${e.text}</p></div></article>`).join('');
  q('#post-list').innerHTML=posts.length?posts.filter(p=>p.published!==false).map(p=>`<article>${p.image?`<img class="post-image" src="${p.image}" alt="">`:''}<span>${p.date}</span><h3>${p.title}</h3><p>${p.body}</p></article>`).join(''):`<article><span>Coming soon</span><h3>No posts published yet.</h3><p>I am preparing the first entry for this space.</p></article>`;
});
