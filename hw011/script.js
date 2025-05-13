const url = "../data.json";

async function getData(url) {
	try {
		const response = await fetch(url);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	const products = await getData(url);
	const productContentElement = document.querySelector(".products__content");

	products.forEach((product) => {
		productContentElement.insertAdjacentHTML(
			"beforeend",
			`
            <div class="product">
              <div class="product__image-wrapper">
                <img src="${product.img_url}" alt="${
				product.title
			}" class="product__img" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__info">
                <h3 class="product__name">${product.title.toUpperCase()}</h3>
                <p class="product__descr">${product.description}</p>
                <p class="product__price">${product.price}</p>
              </div>
            `
		);
	});
});
