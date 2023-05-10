function salvar() {
    let table = document.querySelector('.table');
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);

    cell0.innerHTML = document.getElementById('nome').value;
    cell0.innerHTML = document.getElementById('email').value;
    cell0.innerHTML = document.getElementById('nascimento').value;
    cell0.innerHTML = document.getElementById('uf').value;
  }