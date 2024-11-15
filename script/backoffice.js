const form = document.getElementById("formNewProduct");
const newProduct = document.getElementById("newProduct");
const price = document.getElementById("price");
const description = document.getElementById("description");
const imgURL = document.getElementById("imgURL");
const saveBtn = document.getElementById("save-btn");

class Product {
  constructor(_product, _price, _description, _imgURL, _brand) {
    this.name = _product;
    this.description = _description;  
    this.brand = _brand;
    this.imageUrl= _imgURL;
    this.price = _price;    

  }
}




form.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = new Product(
    newProduct.value,
    price.value,
    description.value,
    imgURL.value,
    "Clementoni"
  );

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTg4MDhhZDEyOTAwMTU4NzZiZTUiLCJpYXQiOjE3MzE2NjQxODUsImV4cCI6MTczMjg3Mzc4NX0.-avXl_JYeNix_3ymyoTPi6_dIHMLKGx7Dtd2TCxpBB8",
    },
  })
    .then((response) => {
      if (response.ok) {
        // console.log(response)
        alert("Prodotto salvato");
      } else {
        throw new Error("Errore");
      }
    })
    .catch((error) => {
      console.log("errore", error);
      alert("Errore salvataggio");
    });
});
