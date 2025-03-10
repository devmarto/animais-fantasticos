export default function initAnimateScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length){
    const windowHalf = window.innerHeight * 0.60;

    function animateScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    window.addEventListener('scroll', animateScroll);
    animateScroll();
  }
}
