function finalizar(){
    const chassi = document.getElementById("chassi").value;

    const placa = document.getElementById("placa").value;
    
    const produto = document.getElementById("produto").value;

    const mao_de_obra = document.getElementById("mao_de_obra").value;
    alert(chassi + " - " + placa + " - " + produto + " - " + mao_de_obra);

        if(chassi == ""){
                alert("Você precisa preencher o campo chassi");
        }

        if(placa == ""){
                alert("Você precisa preencher o campo placa");
        }

        if(produto == ""){
                alert("Você precisa preencher o campo produto");
        }
     
        if(mao_de_obra == ""){
                alert("Você precisa preencher o campo mao de obra");
        }
}
