function limpaformulario(){
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('ibge').value = '';
}

function meucallback(conteudojson){
if(!("erro" in conteudojson)){
    document.getElementById('rua').value = (conteudojson.logradouro);
    document.getElementById('bairro').value = (conteudojson.bairro);
    document.getElementById('cidade').value = (conteudojson.localidade);
    document.getElementById('uf').value = (conteudojson.uf);
    document.getElementById('ibge').value = (conteudojson.ibge);
}else{
    limpaformulario();
    alert('CEP não encontrado!')
}
}

function pesquisacep(valor){
let cep = valor.replace(/\D/g, '');
if(cep != ""){
    let validacep = /^[0-9]{8}$/;
    if(validacep.test(cep)){
        let script = document.createElement('script');
        script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=meucallback";
        document.body.appendChild(script);
    }else{
        limpaformulario();
        alert("CEP inválido!");
    }
}else{
    limpaformulario();
}
}