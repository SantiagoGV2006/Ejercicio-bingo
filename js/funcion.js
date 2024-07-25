document.addEventListener("DOMContentLoaded", function() {
  let bingo = [];
  let numeros = [];
  let row;
  let col;
  let printBingo = '';
  let num = 2;

  for (row = 0; row < 5; row++) {
    numeros = [];
    for (col = 0; col < 5; col++) {
      numeros.push(num);
      num += 2;
    }
    bingo.push(numeros);
  }

  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      printBingo += '<td>' + bingo[row][col] + '</td>';
    }
    
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (col === 0) {
      printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
    } else {
      printBingo += '<td>' + bingo[row][col] + '</td>';
      }
    }
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (col === 1) {
      printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
    } else {
      printBingo += '<td>' + bingo[row][col] + '</td>';
      }
    }
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (col === 2) {
      printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
    } else {
      printBingo += '<td>' + bingo[row][col] + '</td>';
      }
    }
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (col === 3) {
      printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
    } else {
      printBingo += '<td>' + bingo[row][col] + '</td>';
      }
    }
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (col === 4) {
      printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
    } else {
      printBingo += '<td>' + bingo[row][col] + '</td>';
      }
    }
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (bingo[row][col]!== 4 && bingo[row][col]!== 6 && bingo[row][col]!== 8 && 
      bingo[row][col]!== 12 && bingo[row][col]!== 16 && bingo[row][col]!== 20 &&
      bingo[row][col]!== 22 && bingo[row][col]!== 24 && bingo[row][col]!== 28 &&
      bingo[row][col]!== 30 && bingo[row][col]!== 32 && bingo[row][col]!== 36 &&
      bingo[row][col]!== 40 && bingo[row][col]!== 44 && bingo[row][col]!== 46 &&
      bingo[row][col]!== 48) {
        printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
      } else {
        printBingo += '<td>' + bingo[row][col] + '</td>';  
      }  
    }  
    printBingo += '</tr>';  
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  
  
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-striped">';
  printBingo += '<thead>';
  printBingo += '<tr>';
  printBingo += '<th scope="col">B </th>';
  printBingo += '<th scope="col">I </th>';
  printBingo += '<th scope="col">N </th>';
  printBingo += '<th scope="col">G </th>';
  printBingo += '<th scope="col">O </th>';
  printBingo += '</tr>';
  printBingo += '</thead>';


  for (row = 0; row < bingo.length; row++) {
    printBingo += '<tr>';
    for (col = 0; col < bingo[row].length; col++) {
      if (bingo[row][col]!== 4 && bingo[row][col]!== 8 && bingo[row][col]!== 12 && 
      bingo[row][col]!== 16 && bingo[row][col]!== 20 && bingo[row][col]!== 24 && 
      bingo[row][col]!== 28 && bingo[row][col]!== 32 && bingo[row][col]!== 36 &&
      bingo[row][col]!== 38 && bingo[row][col]!== 40 && bingo[row][col]!== 44 && 
      bingo[row][col]!== 48 && bingo[row][col]!== 50) {
        printBingo += '<td class="text-danger">' + bingo[row][col] + '</td>';
      } else {
        printBingo += '<td>' + bingo[row][col] + '</td>';  
      }  
    }  
    printBingo += '</tr>';
  }

  printBingo += '</table>';
  printBingo += '</div>';

  document.getElementById('tabla-1').innerHTML = printBingo;

  


});