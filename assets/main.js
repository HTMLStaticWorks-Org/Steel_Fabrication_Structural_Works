
(()=>{const root=document.documentElement;const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');const backdrop=document.querySelector('.menu-backdrop');const close=()=>{nav?.classList.remove('open');backdrop?.classList.remove('show');menu?.setAttribute('aria-expanded','false');document.body.style.overflow=''};menu?.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);backdrop.classList.toggle('show',open);menu.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''});backdrop?.addEventListener('click',close);nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.querySelector('.theme-toggle')?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;try{localStorage.setItem('fw-theme',next)}catch(e){}});document.querySelector('.dir-toggle')?.addEventListener('click',()=>{const next=root.dir==='rtl'?'ltr':'rtl';root.dir=next;root.lang=next==='rtl'?'ar':'en';try{localStorage.setItem('fw-dir',next)}catch(e){}});const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.main-nav>a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.feature-card,.service-tile,.project-card,.feature-photo,.story-image').forEach(el=>{el.classList.add('reveal');obs.observe(el)});const form=document.querySelector('.enquiry-form');form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const feedback=form.querySelector('.form-feedback');feedback.textContent='Thank you. Your enquiry has been captured in this demo. Connect a backend or email service to receive submissions.';form.reset()});})();

/* Flip-card and hexagon carousel interactions */
(()=>{
  document.querySelectorAll('.flip-card').forEach(card=>{
    card.addEventListener('click',()=>card.classList.toggle('flipped'));
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.classList.toggle('flipped')}});
  });
  document.querySelectorAll('.hex-stage').forEach(stage=>{
    const cards=[...stage.querySelectorAll('.hex-card')];
    let active=Math.max(0,cards.findIndex(card=>card.classList.contains('main')));
    const update=()=>{
      cards.forEach((card,i)=>{
        card.classList.toggle('main',i===active);
        card.classList.toggle('side',i!==active);
        card.setAttribute('aria-current',String(i===active));
      });
    };
    stage.querySelector('.prev')?.addEventListener('click',()=>{active=(active+cards.length-1)%cards.length;update()});
    stage.querySelector('.next')?.addEventListener('click',()=>{active=(active+1)%cards.length;update()});
    update();
  });
})();

/* Home 1 timeline: working arrows, scroll snapping, active progress and clickable stops. */
(()=>{
  document.querySelectorAll('.timeline-track').forEach(track=>{
    const rail=track.querySelector('.timeline-rail');
    const marker=rail?.querySelector('span');
    const cardsBox=track.querySelector('.timeline-cards');
    const cards=[...track.querySelectorAll('.timeline-card')];
    const dots=[...track.querySelectorAll('.timeline-dot')];
    const status=track.querySelector('.timeline-status');
    const prev=track.querySelector('.prev');
    const next=track.querySelector('.next');
    if(!rail||!marker||!cardsBox||!cards.length)return;
    let active=0;
    const getActive=()=>{
      const box=cardsBox.getBoundingClientRect();
      const center=box.left+box.width/2;
      let best=0,dist=Infinity;
      cards.forEach((card,i)=>{
        const r=card.getBoundingClientRect();
        const d=Math.abs((r.left+r.width/2)-center);
        if(d<dist){dist=d;best=i;}
      });
      return best;
    };
    const goTo=(index)=>{
      const item=cards[Math.max(0,Math.min(cards.length-1,index))];
      if(!item)return;
      const box=cardsBox.getBoundingClientRect();
      const card=item.getBoundingClientRect();
      const target=cardsBox.scrollLeft+(card.left+card.width/2-(box.left+box.width/2));
      cardsBox.scrollTo({left:target,behavior:'smooth'});
    };
    const sync=()=>{
      const max=cardsBox.scrollWidth-cardsBox.clientWidth;
      active=getActive();
      const progress=cards.length>1?active/(cards.length-1):0;
      cards.forEach((card,i)=>card.classList.toggle('active',i===active));
      marker.style.left=(progress*100)+'%';
      rail.setAttribute('aria-valuenow',String(active+1));
      dots.forEach((dot,i)=>{
        dot.classList.toggle('active',i===active);
        dot.setAttribute('aria-current',String(i===active));
      });
      if(status){
        const heading=cards[active].querySelector('h3')?.textContent?.trim()||'Company milestone';
        status.innerHTML='<b>'+String(active+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0')+'</b><span>'+heading+'</span>';
      }
      const atStart=cardsBox.scrollLeft<=2;
      const atEnd=cardsBox.scrollLeft>=max-2;
      if(prev){prev.disabled=atStart;prev.classList.toggle('is-disabled',atStart)}
      if(next){next.disabled=atEnd;next.classList.toggle('is-disabled',atEnd)}
    };
    prev?.addEventListener('click',()=>goTo(active-1));
    next?.addEventListener('click',()=>goTo(active+1));
    dots.forEach((dot,i)=>dot.addEventListener('click',()=>goTo(i)));
    rail.addEventListener('click',e=>{
      if(e.target.closest('.timeline-dot'))return;
      const rect=rail.getBoundingClientRect();
      const pct=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));
      goTo(Math.round(pct*(cards.length-1)));
    });
    cardsBox.addEventListener('scroll',()=>requestAnimationFrame(sync),{passive:true});
    window.addEventListener('resize',sync);
    cardsBox.addEventListener('keydown',e=>{
      if(e.key==='ArrowRight'){e.preventDefault();goTo(active+1)}
      if(e.key==='ArrowLeft'){e.preventDefault();goTo(active-1)}
    });
    sync();
  });
})();
/* Graceful image fallback: do not recycle one stock photo across unrelated sections. */
(()=>{
  document.querySelectorAll('img').forEach(img=>{
    img.addEventListener('error',()=>{
      img.classList.add('image-unavailable');
      img.style.display='none';
    },{once:true});
  });
})();

/* Robust Pexels image fallback: try alternate verified industrial photos, never overlay labels. */
(()=>{
 const fallbackPhotos=[
  32200451,2480481,5846247,5846122,10395741,37663560,12475053,33547498,
  31349534,27383630,8377792,15947586,32845682,5580135,36003983,36003989,
  34766492,32569698,33694037,32845683,15947587,32467386,16708396,35404938
 ];
 document.querySelectorAll('img').forEach(img=>{
   img.dataset.fallbackIndex='0';
   img.addEventListener('error',()=>{
     const current=Number(img.dataset.fallbackIndex||0);
     if(current>=fallbackPhotos.length){img.classList.add('image-unavailable');img.style.display='none';return;}
     const next=fallbackPhotos[(current+1)%fallbackPhotos.length];
     img.dataset.fallbackIndex=String(current+1);
     img.src=`https://images.pexels.com/photos/${next}/pexels-photo-${next}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
   });
 });
})();
