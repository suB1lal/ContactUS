function validateEmail(email) {
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(email);
}

function checkEmail() {
    const emailInput = document.getElementById("email");
    const resultMessage = document.getElementById("result");

    const isValid = validateEmail(emailInput.value);

    if (isValid) {
        resultMessage.textContent = "";
    } else {
        resultMessage.textContent = "Geçersiz e-posta adresi.";
        resultMessage.style.fontSize = "12px"
        resultMessage.style.color = "red";
    }
}