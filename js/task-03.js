const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Отримує посилання на галерею
const galleryEl = document.querySelector(".gallery");

// Створює шаблон розмітки для для об'єкта (callback функція)
const createPhotoMarkup = (({ url, alt }) => {
  return `
  <li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__img"></li>
  `
})

// Створює розмітку для масиву об'єктів
const createGalleryMarcup = images.map(createPhotoMarkup).join("");

// Записує результат 
galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarcup);