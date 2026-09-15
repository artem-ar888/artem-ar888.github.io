document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener('load', () => {
  const iconWrappers = document.querySelectorAll(
    '.single-color-icon-wrapper[data-icon], .contact-icon[data-icon]'
  );

  iconWrappers.forEach(wrapper => {
    const iconName = wrapper.dataset.icon;
    const size = parseInt(wrapper.dataset.size, 10) || 24;

    if (typeof Icons?.[iconName] === 'function') {
      // Очищаем контейнер перед вставкой на случай повторного открытия модалок или перерендова
      wrapper.innerHTML = '';
      wrapper.insertAdjacentHTML('beforeend', Icons[iconName](size));
    }
  });
});
