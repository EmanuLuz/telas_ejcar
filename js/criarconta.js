function criarconta() {
    const nome = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const email = document.querySelector('input[type="email"]').value;

    if(nome === ""){
        alert("Você precisa preencher o campo nome");
    }

    if(senha === ""){
        alert("Você precisa preencher o campo senha");
    }

    if(email === ""){
        alert("Você precisa preencher o campo email");
    }

    alert(nome + " - " + senha + " - " + email);
}