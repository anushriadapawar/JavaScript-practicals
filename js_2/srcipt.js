function addtocart() {
    var name = document.getElementById("product-name").textContent;
    var price = document.getElementById("product-price").textContent;

    var item = {
        name: name,
        price: parseInt(price),
        quantity: 1
      };
}