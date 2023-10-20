function compararContraseñas(){
    let password1 =document.getElementById("password1").value;
    let password2 =document.getElementById("password2").value;

    let resultElement =document.getElementById("resultado");

    if (password1 === password2) {
        resultElement.textContent ="Las contraseñas son iguales.";
        resultElement.style.color= "green";
    }else{
        resultElement.textContent ="Las contraseñas no coinciden. Intentalo de nuevo.";
        resultElement.style.color= "red";
    }
}