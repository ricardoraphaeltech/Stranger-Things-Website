//  ANIMAÇÕES -> ANIMAÇÕES COM ROLAGEM

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

const animarPagina = () => {
  // ANIMAÇÕES HERO

  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // ANIMAÇÕES CARDS

  gsap.from(".card", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 80%",
    },
  });

  // ANIMAÇÕES DEPOIMENTOS

  gsap.from(".depoimento", {
    opacity: 0,
    duration: 1,
    x: 40,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".depoimentos",
      start: "0% 85%",
    },
  });

  // ANIMAÇÕES NOME DAS CIDADES

  gsap.from(".secaoAgradecimentos .cidades ul li", {
    opacity: 0,
    duration: 1,
    x: 40,
    stagger: 0.05,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".secaoAgradecimentos .cidades ul",
      start: "0% 90%",
    },
  });

  // ANIMAÇÕES FOOTER

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%"
    }
  });

  // LETRAS ANIMADAS

  // SELECIONE TODOS OS ELEMENTOS DA SUA PAGINA QUE TEM A CLASSE .textoSplit
  const grupoTextoSplit = document.querySelectorAll(".textoSplit");

  // ANIMAR CADA ELEMENTO DESSE GRUPAMENTO COM -> forEach()

  grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "words, chars",
      mask: "words",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textoUnicoSplit,
      },
    });
  });
};

// PRELOADER -> CRIAR TIMELINE

const tl = gsap.timeline({
  onComplete() {
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
    animarPagina();
  },
});

tl.to("#preloader path", {
  strokeDashoffset: 0,
  duration: 1,
});

tl.to("#preloader path", {
  fill: "rgb(175, 14, 14)",
  duration: 0.5,
});
