const products = [
  {
    image: "https://course-api.com/images/store/product-1.jpeg",
    name: "High-Back Bench",
    subTitle: "Ikea",
    price: "$9.99"
  },
  {
    image: "https://course-api.com/images/store/product-2.jpeg",
    name: "Albany Table",
    subTitle: "Ikea",
    price: "$79.99"
  },
  {
    image: "https://course-api.com/images/store/product-3.jpeg",
    name: "Accent Chair",
    subTitle: "Ikea",
    price: "$25.99"
  },
  {
    image: "https://course-api.com/images/store/product-4.jpeg",
    name: "Wooden Table",
    subTitle: "Ikea",
    price: "$45.99"
  },
  {
    image: "https://course-api.com/images/store/product-5.jpeg",
    name: "Dining Table",
    subTitle: "Ikea",
    price: "$6.99"
  },
  {
    image: "https://course-api.com/images/store/product-6.jpeg",
    name: "Sofa Set",
    subTitle: "Ikea",
    price: "$69.99"
  },
  {
    image: "https://course-api.com/images/store/product-7.jpeg",
    name: "Modern Bookshelf",
    subTitle: "Ikea",
    price: "$8.99"
  },
  {
    image: "https://course-api.com/images/store/product-8.jpeg",
    name: "Emperor Bed",
    subTitle: "Ikea",
    price: "$21.99"
  },
  {
    image: "https://course-api.com/images/store/product-9.jpeg",
    name: "Utopia Sofa",
    subTitle: "Ikea",
    price: "$39.99"
  },
  {
    image: "https://course-api.com/images/store/product-10.jpeg",
    name: "Entertainment Center",
    subTitle: "Ikea",
    price: "$29.98"
  },
  {
    image: "https://course-api.com/images/store/product-11.jpeg",
    name: "Albany Sectional",
    subTitle: "Ikea",
    price: "$10.99"
  },
  {
    image: "https://course-api.com/images/store/product-12.jpeg",
    name: "Leather Sofa",
    subTitle: "Ikea",
    price: "$9.99"
  },
];

const productsContainer = document.querySelector(".products-container")

if (productsContainer) {
  products.forEach((item) => {
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

  const params = new URLSearchParams(window.location.search)
  const id = params.get("productId")

  if (id) {
    const price = document.querySelector(".price")
    const productTitle = document.querySelector(".product-title")
    const subTitle = document.querySelector(".sub-title")
    const productDetail = products.find((item) => item.name === id)
    if (productDetail) {
      productImage.src = productDetail.image
      price.innerHTML = productDetail.price
      productTitle.innerHTML = productDetail.name
      subTitle.innerHTML = productDetail.subTitle
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
