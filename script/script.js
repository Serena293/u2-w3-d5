const container = document.getElementById("main-container");
// const backofficeLink = document.getElementById('backoffice-link')
 
const addProducts = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTg4MDhhZDEyOTAwMTU4NzZiZTUiLCJpYXQiOjE3MzE2NjQxODUsImV4cCI6MTczMjg3Mzc4NX0.-avXl_JYeNix_3ymyoTPi6_dIHMLKGx7Dtd2TCxpBB8",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore recupero risposta");
      }
    })
    .then((products) => {
        console.log(products)
        products.forEach((product)=>{
            const newSlot = document.createElement("div");
            newSlot.innerHTML = ` <div class="card m-2">
              <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>`;
            container.appendChild(newSlot);
        })
    })

    .catch((error) => {
      console.log('errore', error);
    });
};

addProducts();
// backofficeLink.addEventListener('click', ()=>{ window.location.href = "backoffice.html";})


