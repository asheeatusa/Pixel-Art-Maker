
// Select color input
// const color = (document.getElementById('colorPicker').value);

// console.log(color);
// Select size input
const hight = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWeight').value;
        

console.log(hight);
console.log(width);

// let cell = '';
// const cell = document.createElement('td');
// When size is submitted by the user, call makeGrid()

function makeGrid() {

const myTable = document.getElementById('pixelCanvas');
// Your code goes here!

// console.log(color);

// document.write("<table border=1>");
for( r=1; r<=hight; r++){
// document.write("<tr>");

const trs = document.createElement('tr');
const updateTable = myTable.appendChild(trs);
const trss = myTable.appendChild(trs);
console.log(trss);
    // row = document.querySelector('#pixelCanvas').innerHTML +='<tr>';
    // console.log(row);

    for( c=1; c<=width; c++){
        // document.write(cell);
        // console.log(newElement);
        // document.write(newElement);  
const newElement = document.createElement('td');
        updateTable.appendChild(newElement);
        // const testme =myTable.appendChild(trss);
        // console.log(testme);
         // cell = document.write('<td id="test">            </td>');
        newElement.addEventListener('click', function(){
        newElement.style.backgroundColor = (document.getElementById('colorPicker').value);
        console.log("was clickeddd");

        });


    }
// document.write('</tr>');
 }
// document.write("</table>");


}


makeGrid();



// const m = document.getElementById('cell');
// console.log(m);

// //click even 
// cell.addEventListener('click', function () {
// 	// body...

// 	console.log('The cell was clicked!');
// });


// for (row = 1; row < 101; row += 1) {

//     tableString += "<tr>";

//     for (col = 1; col < 11; col += 1) {

//         tableString += "<td>" + "row [" + row + "]" + "col [" + col + "]" + "</td>";
//     }
//     tableString += "</tr>";
// }

// makeGrid();


