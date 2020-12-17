import gsap from '../gsapInit';

const prevSlideAnimations = (slideIndex) => {
  const navigationTL = gsap.timeline();
  const sideNavigationTL = gsap.timeline();

  switch (slideIndex) {
    case 0:
      navigationTL
        .to('.nav__ani', { duration: 0.8, opacity: 0, y: -300 })
        .to('.nav__ani', {
          delay: 0.35,
          duration: 0.8,
          y: 0,
          opacity: 1,
          color: '#ffffff',
          fill: '#ffffff',
          stroke: '#ffffff',
        });

      // Side navigation
      sideNavigationTL
        .to(
          ['.nav-side__title', '.banner-text__btn-back'],
          {
            css: { opacity: 0, css: { left: '50%' } },
          },
          'start-nav'
        )
        .to('.slide-container', { css: { width: '75%' } }, 'start-nav')
        .to('.nav-side', { css: { width: '25%' } }, 'start-nav')
        .to('.language', { opacity: 1, x: '-20%' }, 'start-nav')
        .to(
          [
            '.banner-text__title',
            '.banner-text__msg',
            '.banner-text__btn-start',
          ],
          { delay: 1, autoAlpha: 1 }
        )
        .to('.banner-layer-one', {
          css: { backgroundColor: 'hsla(0, 100%, 100%, 0.5)' },
        })
        .to(['.banner-layer-two', '.banner-layer-one'], {
          delay: -1.5,
          duration: 1,
          css: { width: '0%' },
          ease: 'sine.inOut',
          stagger: { amount: 0.3 },
        })
        .to('.banner__image-holder', {
          duration: 1.5,
          delay: -1,
          css: { scale: 1 },
        })
        .to(
          '.info-child-stagger',
          {
            // delay: -4.5,
            duration: 0.8,
            opacity: 0,
            onComplete: () =>
              gsap.set(['.info-child-stagger'], {
                delay: 0.8,
                clearProps: 'all',
              }),
          },
          'start-nav'
        );

      break;
    default:
      break;
  }
};

export default prevSlideAnimations;
