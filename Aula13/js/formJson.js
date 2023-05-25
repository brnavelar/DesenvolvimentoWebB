function formJson(){
    let jsonSend = 
    `{
    "nome":"${document.getElementById('nome').value}", 
    "email":"${document.getElementById('email').value}",
    "nascimento":"${document.getElementById('data').value}",
    "senha":"${document.getElementById('senha').value}",
    "cep":"${document.getElementById('cep').value}",
    "uf":"${document.getElementById('uf').value}",
    "logradouro":"${document.getElementById('rua').value}",
    "bairro":"${document.getElementById('bairro').value}",
    "cidade":"${document.getElementById('cidade').value}",
    "ibge":"${document.getElementById('ibge').value}"
    }`;
    alert(jsonSend);
}
function salvar(){
    let table = document.querySelector('table');
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    cell0.innerHTML = document.getElementById('nome').value;
    cell1.innerHTML = document.getElementById('email').value;
    cell2.innerHTML  = document.getElementById('data').value;
    cell3.innerHTML  = document.getElementById('uf').value;
    cell4.innerHTML = `<i class="bi bi-pencil-square"></i>`;
}