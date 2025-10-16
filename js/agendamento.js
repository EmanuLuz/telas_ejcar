function cadastrar() {
    const dataEntrada = document.getElementById("entradaVeiculo").value;

    const dataSaida = document.getElementById("saidaVeiculo").value;

    const seguradoraSim = document.getElementById("seguradoraSim").value;

    const seguradoraNao= document.getElementById("seguradoraNao").value;


            if(dataEntrada == ""){
                alert("Você precisa preencher a entrada do veiculo");
            }

            if(dataSaida == ""){
                alert("Você precisa preencher a saida do veiculo");
            }

             if(seguradoraSim, seguradoraNao == ""){
                alert("Você precisa preencher o campo endereco");
            }


                alert(dataEntrada + " - " + dataSaida + " - " + seguradoraSim + " - " + seguradoraNao )
}