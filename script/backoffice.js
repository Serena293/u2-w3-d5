const form = document.getElementById('formNewProduct');
const newProduct = document.getElementById('newProduct');
const price = document.getElementById('price');
const description = document.getElementById('description');
const imgURL = document.getElementById('imgURL');
const saveBtn = document.getElementById('save-btn');

class Product {
    constructor(_product, _price, _description, _imgURL, _brand) {
        this.nameame = _product;
        this.price = _price;
        this.description = _description;
        this.ImageURL = _imgURL;
        this.band = _brand
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = new Product(
        newProduct.value, 
        price.value, 
        description.value, 
        imgURL.value,
        'Clementoni'
    );

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: 'POST', 
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDJmOThhZDEyOTAwMTU4NzZiYmIiLCJpYXQiOjE3MzE2NzQ1NDIsImV4cCI6MTczMjg4NDE0Mn0.cRzSYwMnPBznRXqX9JpKOHbyezRsvZUeUl2bd43I75A"
        }
    })
    .then((response) => {
        if (response.ok) {
            alert('Prodotto salvato');
        } else {
            throw new Error('Errore');
        }
    })
    .catch((error) => {
        console.log('errore', error);
        alert('Errore salvataggio');
    });
});
