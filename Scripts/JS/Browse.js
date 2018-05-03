window.onload = function() {
  let i = 0;
  let cardContainer = document.getElementById("product-card-container");
  while (true) {
    if (CatalogDatabase[i]["name"] == "") {
      break;  
    }
    let browserCard = document.createElement("div");
    browserCard.id = "product-card";
    
    browserCard.innerHTML = "<div class='product-card-header'>" + CatalogDatabase[i]["name"] + "</div>" +
      "<div class='product-card-image'><div><p>" + CatalogDatabase[i]["price"]; + "</p></div><img src=" + CatalogDatabase[i]["image"] + " alt=''>" +
      "<div class='product-card-desc'>" + CatalogDatabase[i]["description"] + "</div>";
    
    cardContainer.appendElement(browserCard);
    
    i++;
  }
}
