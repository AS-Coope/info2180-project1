/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var formElement = document.querySelector("form");
    var emailInputField = document.getElementById("email");
    var emailSubscribeBtn = document.getElementsByClassName("btn")[1];
    var emailSubscriptionMessage = document.getElementsByClassName("message")[0];

    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); // prevents form from trying to submit data/ take action

        emailSubscribeBtn.addEventListener('click', (event) => {
            if (emailInputField.value.trim() === "") {
                emailSubscriptionMessage.textContent = "Please enter a valid email address";
            } else {
                emailSubscriptionMessage.textContent = `Thank you! Your email address 
                ${emailInputField.value.trim()} has been added to our mailing list!`;
            }
        });

    });
});