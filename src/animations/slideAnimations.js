import gsap from '../gsapInit';

const slideAnimations = (slideIndex) => {
  const bannerTL = gsap.timeline();
  const navigationTL = gsap.timeline();
  const sideNavigationTL = gsap.timeline();
  const slideOneTL = gsap.timeline();
  const slideTwoTL = gsap.timeline();
  const slideThreeTL = gsap.timeline();
  const slideFourTL = gsap.timeline();

  switch (slideIndex) {
    case 1:
      // Navigation
      navigationTL
        .to('.nav__ani', { duration: 0.8, opacity: 0, y: -300 })
        .to('.nav__ani', {
          delay: 0.35,
          duration: 0.8,
          y: 0,
          opacity: 1,
          color: '#1c3454',
          fill: '#1c3454',
          stroke: '#1c3454',
        });

      // Side navigation
      sideNavigationTL
        .to('.slide-container', { css: { width: '80%' } }, 'start-nav')
        .to('.nav-side', { css: { width: '20%' } }, 'start-nav')
        // .to('.language', { opacity: 1, x: -30 }, 'start-nav')
        .to('.language', { opacity: 1, x: '-80%' }, 'start-nav')
        .to(
          [
            '.banner-text__title',
            '.banner-text__msg',
            '.banner-text__btn-start',
          ],
          {
            autoAlpha: 0,
          },
          'start-nav'
        )
        .to('.banner-text__btn-back', { y: 30 })
        .to(
          '.nav-side__title',
          {
            delay: 0.5,
            css: { opacity: 1, css: { left: '38%' } },
          },
          'side-show'
        )
        .to(
          '.banner-text__btn-back',
          { delay: 0.85, autoAlpha: 1, x: -30 },
          'side-show'
        );

      // Banner
      bannerTL
        .to(
          ['.banner-layer-one', '.banner-layer-two'],
          {
            duration: 0.7,
            css: { width: '100%' },
            ease: 'sine.inOut',
            stagger: { amount: 0.3 },
          },
          'zoomImage'
        )
        .to('.banner-layer-one', {
          delay: -0.5,
          css: { backgroundColor: '#fff' },
        })
        .to(
          '.banner__image-holder',
          {
            duration: 1,
            ease: 'sine.inOut',
            opacity: 0,
            css: { scale: 1.6 },
          },
          'zoomImage'
        );

      // Slide one animations
      slideOneTL
        .from(
          '.info-parent-stagger',
          { duration: 1, y: 100, stagger: { amount: 1.5 } },
          'info-start'
        )
        .from(
          '.info-child-stagger',
          {
            delay: 1.45,
            // duration: 1,
            opacity: 0,
            ease: 'sine.inOut',
            y: 120,
            stagger: { amount: 0.4 },
          },
          'info-start'
        );

      break;
    case 2:
      // Slide previous up
      slideOneTL
        .to(
          '.info-parent-stagger',
          { duration: 1, y: -100, stagger: { amount: 1.5 } },
          'info-start'
        )
        .to(
          '.info-child-stagger',
          {
            ease: 'sine.inOut',
            y: -120,
            stagger: { amount: 0.6 },
          },
          'info-start'
        )
        .to('.info-parent-stagger', { duration: 1, y: 0 }, 'info-end')
        .to(
          '.info-child-stagger',
          {
            ease: 'sine.inOut',
            y: 0,
          },
          'info-end'
        );

      slideTwoTL
        .from(
          '.rec__image-holder',
          {
            delay: 0.6,
            duration: 1.1,
            width: 0,
            ease: 'power3.out',
            transformOrigin: '100% 50%',
            stagger: { amount: 0.3 },
          },
          'rec-start'
        )
        .fromTo(
          '.rec__img-reveal',
          { width: '100%' },
          {
            delay: 1.1,
            duration: 1,
            width: 0,
            ease: 'power3.out',
          },
          'rec-start'
        )
        .from(
          '.rec-parent-stagger',
          { duration: 1, y: 100, stagger: { amount: 0.8 } },
          'rec-start'
        )
        .from(
          '.rec-child-stagger',
          {
            delay: 0.3,
            duration: 1,
            ease: 'sine.inOut',
            y: 120,
            stagger: { amount: 0.4 },
          },
          'rec-start'
        );
      break;
    case 3:
      // Slide previous up
      slideTwoTL
        .to(
          '.rec-parent-stagger',
          { duration: 1, y: -100, stagger: { amount: 1.5 } },
          'rec-start'
        )
        .to(
          '.rec-child-stagger',
          {
            ease: 'sine.inOut',
            y: -120,
            stagger: { amount: 0.6 },
          },
          'rec-start'
        )
        .to('.rec-parent-stagger', { duration: 1, y: 0 }, 'rec-end')
        .to(
          '.rec-child-stagger',
          {
            ease: 'sine.inOut',
            y: 0,
          },
          'rec-end'
        );

      slideThreeTL.from('.welcome-child-stagger', {
        delay: 0.3,
        duration: 1,
        ease: 'sine.inOut',
        y: 120,
        stagger: { amount: 0.4 },
      });
      break;
    case 4:
      slideThreeTL
        .to('.welcome-child-stagger', {
          duration: 1,
          ease: 'sine.inOut',
          y: -120,
          stagger: { amount: 0.6 },
        })
        .to('.welcome-child-stagger', {
          duration: 1,
          y: 0,
        });

      slideFourTL
        .from(
          '.rec2__image-holder',
          {
            delay: 0.6,
            duration: 1.1,
            width: 0,
            ease: 'power3.out',
            transformOrigin: '100% 50%',
            stagger: { amount: 0.3 },
          },
          'rec2-start'
        )
        .fromTo(
          '.rec2__img-reveal',
          { width: '100%' },
          {
            delay: 1.1,
            duration: 1,
            width: 0,
            ease: 'power3.out',
          },
          'rec2-start'
        )
        .from(
          '.rec2-parent-stagger',
          { duration: 1, y: 120, stagger: { amount: 0.8 } },
          'rec2-start'
        )
        .from(
          '.rec2-child-stagger',
          {
            delay: 0.3,
            duration: 1,
            ease: 'sine.inOut',
            y: 120,
            stagger: { amount: 0.4 },
          },
          'rec2-start'
        );
      break;
    default:
      break;
  }
};

export default slideAnimations;
