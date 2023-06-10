const products = [{
    "image": "https://course-api.com/images/store/product-1.jpeg",
    "name": "High-Back Bench",
    "price": "$9.99"
}, {
    "image": "https://course-api.com/images/store/product-2.jpeg",
    "name": "Albany Table",
    "price": "$79.99"
}, {
    "image": "https://course-api.com/images/store/product-3.jpeg",
    "name": "Accent Chair",
    "price": "$25.99"
}, {
    "image": "https://course-api.com/images/store/product-4.jpeg",
    "name": "Wooden Table",
    "price": "$45.99"
}, {
    "image": "https://course-api.com/images/store/product-5.jpeg",
    "name": "Dining Table",
    "price": "$6.99"
}, {
    "image": "https://course-api.com/images/store/product-6.jpeg",
    "name": "Sofa Set",
    "price": "$69.99"
}, {
    "image": "https://course-api.com/images/store/product-7.jpeg",
    "name": "Modern Bookshelf",
    "price": "$8.99"
}, {
    "image": "https://course-api.com/images/store/product-8.jpeg",
    "name": "Emperor Bed",
    "price": "$21.99"
}, {
    "image": "https://course-api.com/images/store/product-9.jpeg",
    "name": "Utopia Sofa",
    "price": "$39.99"
}, {
    "image": "https://course-api.com/images/store/product-10.jpeg",
    "name": "Entertainment Center",
    "price": "$29.98"
}, {
    "image": "https://course-api.com/images/store/product-11.jpeg",
    "name": "Albany Sectional",
    "price": "$10.99"
}, {
    "image": "https://course-api.com/images/store/product-12.jpeg",
    "name": "Leather Sofa",
    "price": "$9.99"
}];

const productsContainer = document.querySelector(".products-container");

if (productsContainer) {
    products.forEach(item => {

        productsContainer.innerHTML += `
    <a class="single-product" href="product.html?productId=${item.name}">
        <img class="single-product-img img" id="photo" src="${item.image}">
        <footer>
            <h5>${item.name}</h5>
            <span>${item.price}</span>
        </footer>
    </a>
`
    })
}

const getProduct = () => {
    const singleProduct = document.querySelector(".single-product")
    const productImage = document.querySelector(".product-image")

    const params = new URLSearchParams(window.location.search);
    const id = params.get("productId");

    if (id) {
        const productDetail = products.find(item => item.name === id);
        if (productDetail) {
            productImage.src = productDetail.image
        }
    }
}

getProduct()


// const attachEventListeners = () => {
//     const singleProducts = document.querySelectorAll(".single-product");

//     singleProducts.forEach((product, index) => {
//         product.addEventListener("click", (event) => {
//             const productImage = document.querySelector(".product-image");
//             console.log(producs)
//             productImage.src = products[index].product;

//         });
//     });
// };

