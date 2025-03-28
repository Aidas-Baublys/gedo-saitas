export const scrollToSectionById = (id: string, offset?: number) => {
  const trueOffset = offset || 0;
  const section = document.getElementById(id);

  if (section) {
    const navHeight = document.getElementById('nav')?.offsetHeight || 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - navHeight - trueOffset,
      behavior: 'smooth',
    });
  }
};
