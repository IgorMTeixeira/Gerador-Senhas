let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

/* tamanho da senha posta no html entra no valor do slider */
sizePassword.innerHTML = sliderElement.value;

/* valor é passado para o tamanho da senha*/ 
slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

/*executa um laço na qual pega o tamanho da senha e enquanto for menor que o elemento i, percorre o laço */
/*em seguida, dentro do for o charAt basicamente transforma o que está dentro do charset em um numero inteiro, fazendo com que 0 seja a, por exemplo
e após isso percorra aleatoriamente multiplicando por n, que é o tamanho da senha */

function generatePassword() {
    
    let pass = "";
    for(let i = 0, n = charset.length; i< sliderElement.value; i++) {
    pass+= charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("SENHA COPIADA");
    navigator.clipboard.writeText(novaSenha);
}