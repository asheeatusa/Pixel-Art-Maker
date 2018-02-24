
const hight = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWeight').value;
console.log(hight);
console.log(width);

function makeGrid() {
const myTable = document.getElementById('pixelCanvas');
for( r=1; r<=hight; r++){
    const trs = document.createElement('tr');
    const updateTable = myTable.appendChild(trs);
    const trss = myTable.appendChild(trs);
    console.log(trss);
    for( c=1; c<=width; c++){
        const newElement = document.createElement('td');
        updateTable.appendChild(newElement);
        newElement.addEventListener('click', function(){
        newElement.style.backgroundColor = (document.getElementById('colorPicker').value);
        console.log("was clickeddd");
        });
    }
 }}
makeGrid();

