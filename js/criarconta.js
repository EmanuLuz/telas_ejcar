function criarconta() {
    alert("chamou a função criar conta");
    const usuario = document.getElementById("usuario").value;

    const senha = document.getElementById("senha").value;

    const email = document.getElementById("email").value;

if(usuario == ""){
    alert("Você precisa preencher o campo usuario");
}

if(senha == ""){
    alert("Você precisa preencher o campo senha");
}

if(email == ""){
    alert("Você precisa preencher o campo email");
}

        
    alert(usuario + " - " + senha + " - " + email + " - " );
}