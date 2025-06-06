// Генерация случайного целого числа в диапазоне [from, to]
const getRandomInteger = (a, b) => {
  const from = Math.ceil(Math.min(a, b));
  const to = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

// Выбор случайного элемента из массива
const getRandomArrayItem = (items) => items[getRandomInteger(0, items.length - 1)];

// Создание массива заданной длины с помощью callback
const createCustomLengthArray = (length = 0, callback = () => {}) =>
  Array.from({ length }, (_, i) => callback(i + 1));

// Проверка, является ли нажатая клавиша Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Переключение класса у элемента
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

export { getRandomInteger, getRandomArrayItem, createCustomLengthArray, isEscapeKey, toggleClass };
