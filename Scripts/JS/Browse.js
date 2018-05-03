window.onload = function() {
  let i = 0;
  let cardContainer = document.getElementById("product-card-container");
  while (true) {
    if (CatalogDatabase["Items"].length == i) {
      break;  
    }
    let browserCard = document.createElement("div");
    browserCard.setAttribute("class", "product-card");
    
    browserCard.innerHTML = "<div class='product-card-header'>" + CatalogDatabase["Items"][i]["name"] + "</div>" +
      "<div class='product-card-image'><div><p>" + CatalogDatabase["Items"][i]["price"]; + "</p></div><img src='" + CatalogDatabase["Items"][i]["imgName"] + "' alt=''>" +
      "<div class='product-card-desc'>" + CatalogDatabase["Items"][i]["description"] + "</div>";
    
    cardContainer.appendChild(browserCard);
    
    i++;
  }
}
