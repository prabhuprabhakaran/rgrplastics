let positionSlideStart = false;
let position_count = 1;
let addclassID;
let addclassData;
var ourProductsDataHTML = "";
var ourProductsIDHTML = "";

var myPositions = JSON.parse(products);

for (let i = 0; i < myPositions.length; i++) {
  if (i == 0) {
    addclassID = 'class="active"';
    addclassData = 'class="item active"';
  } else {
    addclassID = "";
    addclassData = 'class="item"';
  }
  ourProductsIDHTML += '<li data-target="#myCarousel" data-slide-to="' + i + '" ' + addclassID + "></li>";
  ourProductsDataHTML +=
    "<div " +
    addclassData +
    ">" +
    '<div class="row" style="padding:20px">' +
    '<div class="col-md-2"> </div> <div class="col col-md-4" style="text-align:center">' +
    '<img  src="https://source.unsplash.com/random/250x300" alt="250x300" > ' +
    "</div>" +
    '<div class="col col-md-4">' +
    myPositions[i].product_code +
    myPositions[i].name +
    "<b> Height : " +
    myPositions[i].height +
    " Diameter : " +
    myPositions[i].diameter +
    " Width : " +
    myPositions[i].weight +
    "</b>" +
    " Colours :" +
    myPositions[i].colours +
    " Material :" +
    myPositions[i].material +
    " Grade :" +
    myPositions[i].grade +
    "</div> <div class='col-md-2'> </div>" +
    "</div>" +
    "</div>";
}
