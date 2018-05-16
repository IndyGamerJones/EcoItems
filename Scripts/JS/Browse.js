window.onload = function() {
  let i = 0;
  let cardContainer = document.getElementById("product-card-container");
  while (true) {
    if (CatalogDatabase["Items"].length == i) {
      break;
    }
    let browserCard = document.createElement("div");
    browserCard.setAttribute("class", "product-card");
    browserCard.setAttribute("onclick", "{LoadProduct(" + i + ");}");
    
    browserCard.innerHTML = "<div class='product-card-header'>" + CatalogDatabase.Items[i].name + "</div>" +
      "<div class='product-card-image'><div><p>$" + CatalogDatabase.Items[i].price + "</p></div><img src='../Images/Items/" + CatalogDatabase.Items[i].imgName + "'></div>" +
      "<div class='product-card-desc'>" + CatalogDatabase.Items[i].description + "</div>";
    
    cardContainer.appendChild(browserCard);
    
    i++;
  }
}
function LoadProduct(index) {
  if (index > CatalogDatabase["Items"].length) {
    console.log("Error!  Item Index out of Bounds!");
    return;
  }
  let panel = document.getElementById("product-panel");
  panel.setAttribute("on","true");

  panel.innerHTML = "<p style='float:right;margin-top: 0.5vw;margin-right: 0.5vw;font-size:2vw;' onclick='{UnloadProduct();}'>X</p><table class='align_table' style='width: 84%;'><tr><td style='width: 47%; float:left;'><img style='width:100%;height: auto;float:left;' src='../Images/Items/" + CatalogDatabase.Items[index].imgName + "'></td><td style='width: 47%;float:right;'>" +
    CatalogDatabase.Items[index].name + "<br><br>" + CatalogDatabase.Items[index].description + "</td></tr></table>";
}
function UnloadProduct() {
  let panel = document.getElementById("product-panel");
  panel.setAttribute("on","false");
}
