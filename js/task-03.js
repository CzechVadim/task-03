const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imageLiEl = document.createElement('li');   /*Создание нового елемента li*/


const imageEl = document.createElement('img');   /*Создание нового елемента img*/
imageEl.src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';   /*Добавление ссылки на новый елемент img*/
imageEl.alt = 'White and Black Long Fur Cat';   /*Добавление описания на новый елемент img*/


imageLiEl.append(imageEl);   /*Добавление в новый елемент li нового елемента img*/


const imageUlEl = document.querySelector('ul');   /*Получение ссылки на существующий елемент ul*/

imageUlEl.append(imageLiEl);   /*Добавление в существующий елемент ul нового елемента li с новым елементом img*/


console.log(imageLiEl);   /*Выведение в консоль нового елемента li*/


console.log(images);   /*Выведение в консоль существующего массива images*/




//const ingredientsListEl = document.querySelector('ul');   /*Получение ссылки на елемент ul для его редактирования*/

/*Создание массива ингредиентов через map*/
//const elements = ingredients.map(ingredient => {
    //const ingredientsItemEl = document.createElement('li');   /*Создание новых елементов li в памяти*/
    //ingredientsItemEl.textContent = ingredient;  /*Добавление текстового контента для новых елементов li в памяти*/
    
    //return ingredientsItemEl;   /*Возвращение новых елементов li из .map*/
//});

//console.log(elements);   /*Выведение в консоль массива елементов li*/
//ingredientsListEl.append(...elements);   /*Выведение массива как колекции независимых аргументов*/