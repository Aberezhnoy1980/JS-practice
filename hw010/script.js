// 1. Получите данные по адресу https://fakestoreapi.com/products.
// 2. Создайте файл data.js.
/* 3. В файле data.js создайте переменную dataJSON, которая будет
хранить эти данные в формате JSON.
*/
/* 4. Создайте вторую переменную data, в которой сохраните данные в
формате массива на основе dataJSON. 
*/
import { dataJSON } from "./data.js";

const data = JSON.parse(dataJSON);
// 5. Создайте файл index.html.

// 6. Подключите data.js в index.html.

/* 7. Сформируйте контент из данных (картинка, заголовок, описание,
цена и кнопка “Add to Cart”).
*/


function addProductsToList(products) {
    // Catch root
    const ulEl = document.querySelector('ul');
    ulEl.classList.add('ul');

    
    products.forEach(product => {
        const liEl = document.createElement('li');
        liEl.classList.add('li')
        
        // Image
        const imgEl = document.createElement('img');
        imgEl.classList.add('img');
        imgEl.src = product.image;
        imgEl.alt = product.title;
        
        // Title
        const titleEl = document.createElement('h2');
        titleEl.classList.add('h2');
        titleEl.textContent = product.title;
        
        // Description
        const descEl = document.createElement('p');
        descEl.textContent = product.description;
        
        // Price
        const priceEl = document.createElement('span');
        priceEl.classList.add('span');
        priceEl.textContent = `Price: $${product.price.toFixed(2)}`;
        
        // Button
        const buttonEl = document.createElement('button');
        buttonEl.classList.add('button');
        buttonEl.setAttribute('data-id', product.id)
        buttonEl.textContent = 'Add to Cart';
        
        // Append elements
        liEl.append(imgEl, titleEl, descEl, priceEl, buttonEl);

        // Append product card
        ulEl.appendChild(liEl);
    });
}

// 8. Добавьте данный контент в верстку в виде списка ul и li.
document,addEventListener('DOMContentLoaded', () => {
    addProductsToList(data);
});

// 9. Добавьте стили при необходимости (по желанию).