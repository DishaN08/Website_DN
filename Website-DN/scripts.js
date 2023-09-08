import { products } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.querySelector(".product-container");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        const imagesHTML = product.images.map(imageUrl => `<img src="${imageUrl}" alt="${product.title}">`).join('');

        productCard.innerHTML = `
            <div class="product-images">${imagesHTML}</div>
            <h3>${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <span>Price: $${product.price}</span>
        `;

        productContainer.appendChild(productCard);
    });
});