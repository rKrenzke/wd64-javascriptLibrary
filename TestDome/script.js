function setup() {
    var lis = document.querySelectorAll('ul li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function(e) {
    
      });
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>`;
  console.log(lis);
  setup();
  
  document.getElementsByTagName("li")[1].click();
  console.log(document.body.innerHTML);

  //////////////////////////

  function appendRow() {
    let table = document.getElementsByTagName('tbody');
    let newRow = document.createElement('tr');
    let newData = document.createElement('td');
    let newData2 = document.createElement('td');

    newRow.appendChild(newData);
    newRow.appendChild(newData2);
    table.appendChild(newRow);
  }
  
  // Example case. 
  document.body.innerHTML = `
  <table id="tbl" border="1">
    <tbody>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>`;
  
  appendRow();
  
  console.log(document.body.innerHTML);

  /////

  function filterNumbersFromArray(arr) {
    return arr.filter(Number.isInteger);
  }
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
  