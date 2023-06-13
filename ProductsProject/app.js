const products = [
  {
    id: 1,
    image: "https://course-api.com/images/store/product-1.jpeg",
    name: "High-Back Bench",
    subTitle: "Ikea",
    price: "$9.99",
  },
  {
    id: 2,
    image: "https://course-api.com/images/store/product-2.jpeg",
    name: "Albany Table",
    subTitle: "Marcos",
    price: "$79.99",
  },
  {
    id: 3,
    image: "https://course-api.com/images/store/product-3.jpeg",
    name: "Accent Chair",
    subTitle: "Caressa",
    price: "$25.99",
  },
  {
    id: 4,
    image: "https://course-api.com/images/store/product-4.jpeg",
    name: "Wooden Table",
    subTitle: "Caressa",
    price: "$45.99",
  },
  {
    id: 5,
    image: "https://course-api.com/images/store/product-5.jpeg",
    name: "Dining Table",
    subTitle: "Caressa",
    price: "$6.99",
  },
  {
    id: 6,
    image: "https://course-api.com/images/store/product-6.jpeg",
    name: "Sofa Set",
    subTitle: "Liddy",
    price: "$69.99",
  },
  {
    id: 7,
    image: "https://course-api.com/images/store/product-7.jpeg",
    name: "Modern Bookshelf",
    subTitle: "Marcos",
    price: "$8.99",
  },
  {
    id: 8,
    image: "https://course-api.com/images/store/product-8.jpeg",
    name: "Emperor Bed",
    subTitle: "Liddy",
    price: "$21.99",
  },
  {
    id: 9,
    image: "https://course-api.com/images/store/product-9.jpeg",
    name: "Utopia Sofa",
    subTitle: "Marcos",
    price: "$39.99",
  },
  {
    id: 10,
    image: "https://course-api.com/images/store/product-10.jpeg",
    name: "Entertainment Center",
    subTitle: "Liddy",
    price: "$29.98",
  },
  {
    id: 11,
    image: "https://course-api.com/images/store/product-11.jpeg",
    name: "Albany Sectional",
    subTitle: "Ikea",
    price: "$10.99",
  },
  {
    id: 12,
    image: "https://course-api.com/images/store/product-12.jpeg",
    name: "Leather Sofa",
    subTitle: "Liddy",
    price: "$9.99",
  },
]

const productsContainer = document.querySelector(".products-container")

if (productsContainer) {
  products.forEach((item) => {
    productsContainer.innerHTML += `
    <a class="single-product" href="product.html?productId=${item.id}">
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
  const productImage = document.querySelector(".product-image")
  const price = document.querySelector(".price")
  const productTitle = document.querySelector(".product-title")
  const subTitle = document.querySelector(".sub-title")

  const params = new URLSearchParams(window.location.search);
  const id = params.get("productId");

  if (id) {
    const productDetail = products.find((item) => item.id == id)
    if (productDetail) {
      productImage.src = productDetail.image
      price.innerHTML = productDetail.price
      productTitle.innerHTML = productDetail.name
      subTitle.innerHTML = productDetail.subTitle
    }
  }
}

getProduct()
