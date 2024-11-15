const form = document.getElementById('formNewProduct')

const newProduct = document.getElementById('newProduct')
const price = document.getElementById('price')
const description = document.getElementById('description')
const imgURL = document.getElementById('imgURL')
const saveBtn = document.getElementById('save-btn')


class Product {
    constructor(_product, _price, _description, _imgURL) {
        this.productName = _product;
        this.productPrice = _price;
        this.productDescription = _description;
        this.productImgURL = _imgURL;
    }
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
const product = new Product(
    newProduct.value, 
    price.value, 
    description.value, 
    imgURL.value
);
console.log(product)
})