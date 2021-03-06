const burger = document.querySelector('.burger__icon');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.menu__block-item');

burger.addEventListener('click', e => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
})


menuLinks.forEach(li => li.addEventListener('click', (e) => {
   if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      menu.classList.remove('active');
   }
}))

console.group('Самооценка по выполненому заданию');
console.log('вёрстка валидная. Проверить валидность вёрстки: https://validator.w3.org/ +10');
console.log('вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов. Заголовок h1 может быть только один +20');
console.log('для оформления СV используются css-стили. 1 балл за каждый стилизованный элемент, но не больше 10 баллов +10');
console.log('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10');
console.log('вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10');
console.log('есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10');
console.log('на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10');
console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li +10');
console.log('CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского');
console.log('CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода +0');
console.log('CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий +10');
console.log('CV выполнено на английском языке +10');
console.log('выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10');
console.log('есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10');
console.log('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10');
console.log('Итоговая оценка 150');
console.log('Ссылка на pull-request https://github.com/ValentinZC/rsschool-cv/pull/2')
console.groupEnd();





