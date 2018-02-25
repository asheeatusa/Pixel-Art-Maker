
function makeGrid() {
    
const myTable = document.getElementById('pixelCanvas');
myTable.innerHTML = "";
// Select size input
let hight = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWeight').value;
console.log(hight);
console.log(width);
for(let r=1; r<=hight; r++){
    const trs = document.createElement('tr');
    const updateTable = myTable.appendChild(trs);
    const trss = myTable.appendChild(trs);
    console.log(trss);
    for(let c=1; c<=width; c++){
        const newElement = document.createElement('td');
        updateTable.appendChild(newElement);
        newElement.addEventListener('click', function(){
        // Select color input
        newElement.style.backgroundColor = document.getElementById('colorPicker').value;
        console.log("was clickeddd");
        });
    }
 }}

// When size is submitted by the user, call makeGrid()

 document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});

