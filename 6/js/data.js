import {checkLength, getRandomNumber, getRandomArrayElement} from './util.js';

const NAMES = [
    'Никита',
    'Влад',
    'Костя',
    'Антон',
    'Сергей',
    'Миша',
    'Ярослав',
    'Тимур',
  ];
  
const DESCRIPTIONS = [
    'Я с семьёй',
    'Я на отдыхе',
    'Мы с друзьями',
    'На дне рождении папы',
    'У бабушки в саду',
    'Моё 20-ти летие',
    'Окончание школы',
    'Летние каникулы',
  ];
  
const COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ];
  
const PICTURES_NUMBER = 25;

let commentId = 0;
let avatarMaxNumber = 0;
const createComment = () => {
  return {
    id: commentId++,
    message: getRandomArrayElement(COMMENTS),
    avatar: `img/avatar${getRandomNumber(1, avatarMaxNumber)}.svg`,
    name: getRandomArrayElement(NAMES)
  }
};

let commentQuantity = 0;
let minLikes = 0;
let maxLikes = 0;
let pictureId = 0;
const createPicture = () => {
  return {
    id: pictureId++,
    url: `photos/${pictureId++}.jpg`,
    likes: getRandomNumber(minLikes, maxLikes),
    comment: createComment(commentQuantity),
    description: getRandomElement(DESCRIPTIONS)
  }
};
  

checkLength(); 
createPicture(PICTURES_NUMBER);

export {createPicture};