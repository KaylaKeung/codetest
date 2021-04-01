// /* globals require */
// console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyw5v6LxIabKZUt7" }).base(
  "appncfimbiSqlTxDx"
);

//get the collection base, select ALL the records, and specify the functions that will receive the data
base("furnitures").select({}).eachPage(gotPageOfFurnitures, gotAllFurnitures);

// an empty array to hold our data
const furnitures = [];

// callback function that receives our data
function gotPageOfFurnitures(records, fetchNextPage) {
  console.log("gotPageOfFurnitures()");
  // add the records from this page to our books array
  furnitures.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllFurnitures(err) {
  console.log("gotAllFurnitures()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFurnitures();
  showFurnitures();
}

// just loop through the books and console.log them
function consoleLogFurnitures() {
  console.log("consoleLogFurnitures()");
  furnitures.forEach((furniture) => {
    console.log("Furniture:", furniture);
  });
}

// loop through the furnitures, create an h2 for each one, and add it to the page
function showFurnitures() {
  console.log("showFurnitures()");
  furnitures.forEach((furniture) => {
   

//creating a new div container, this is where the preview grids will go
var previewImage = document.createElement("div");
previewImage.classList.add("image-container");
document.querySelector(".container").append(previewImage);
//images
var furnitureImage = document.createElement("img");
furnitureImage.classList.add("preview-image");
//array
furnitureImage.src = furniture.fields.image[0].url;
//append
previewImage.append(furnitureImage);



furnitureImage.addEventListener("click", function(){
 nameOfDesigner.style.color = "black";
 furnitureName.style.color ="black";
 button.style.color="black";
})


var furnitureName = document.createElement("h2");
    furnitureName.innerText = furniture.fields.name;
    furnitureName.classList.add("name");
    previewImage.append(furnitureName);


    var nameOfDesigner = document.createElement("h4");
    nameOfDesigner.classList.add("designer");
    nameOfDesigner.innerText = furniture.fields.designer;
   previewImage.append(nameOfDesigner);

var button = document.createElement("h4");
button.classList.add("button");
button.innerText = "X";
previewImage.append(button);

button.addEventListener("click", function(){
  nameOfDesigner.style.color = "white";
 furnitureName.style.color ="white";
 button.style.color="white";
})
  
// get floor from airtable
//loop through array and add each as
// a class to the furniture container
// var furnitureGenre = furniture.fields.floor;
// furnitureGenre.forEach(function(floor){
//   previewImage.classList.add(floor)
// })
// //add event listener to our filter
// // to add an active class to furniture
// var filterDiningTable = docoment.querySelector(".diningtable")
// filterDiningTable.addEventListener("click",function(){

//   if (previewImage.classList.contains("diningtable")){
//     previewImage.style.backgroundColor = "black";
//   }else{
//     previewImage.style.backgroundColor ="white";
//   }
// })

  });
}


