const addressBarContent = new URLSearchParams(window.location.search);

const productId = addressBarContent.get("productId");

fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTg4MDhhZDEyOTAwMTU4NzZiZTUiLCJpYXQiOjE3MzE2NjQxODUsImV4cCI6MTczMjg3Mzc4NX0.-avXl_JYeNix_3ymyoTPi6_dIHMLKGx7Dtd2TCxpBB8",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore");
    }
  })
  .then((product) => {
    console.log(product);
  })
  .catch((error) => {
    console.log("errore", error);
  });
