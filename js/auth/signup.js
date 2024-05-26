// Récupérer les éléments

const inputName = document.getElementById("inputName");
const inputFirstName = document.getElementById("inputFirstName");
const selectDay = document.getElementById("selectDay");
const selectMonth = document.getElementById("selectMonth");
const selectYear = document.getElementById("selectYear");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputConfirmPassword = document.getElementById("inputConfirmPassword");

// Récupération du bouton inscription
const btnValidateInscription = document.getElementById("btnValidateInscription");

// Écouter les événements

inputName.addEventListener("keyup", validateForm);
inputFirstName.addEventListener("keyup", validateForm);
selectDay.addEventListener("change", validateForm);
selectMonth.addEventListener("change", validateForm);
selectYear.addEventListener("change", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputConfirmPassword.addEventListener("keyup", validateForm);

// Fonction des événements à écouter

// Vérification que tous les champs soient bien remplis
function validateForm() {
    const nameValid = validateInputRequired(inputName);
    const firstNameValid = validateInputRequired(inputFirstName);
    const dayValid = validateSelectRequired(selectDay);
    const monthValid = validateSelectRequired(selectMonth);
    const yearValid = validateSelectRequired(selectYear);
    const mailValid = validateMail(inputEmail);
    const passwordValid = validatePassword(inputPassword);
    const confirmPasswordValid = validateConfirmPassword(inputConfirmPassword, inputPassword);

    if (nameValid && firstNameValid && dayValid && monthValid && yearValid && mailValid && passwordValid && confirmPasswordValid) {
        btnValidateInscription.disabled = false;
    } else {
        btnValidateInscription.disabled = true;
    }
}

// Vérification que les champs input soient bien remplis
function validateInputRequired(input) {
    if (input.value !== "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Vérification qu'une option a bien été sélectionnée
function validateSelectRequired(select) {
    if (select.value !== "Jour" && select.value !== "Mois" && select.value !== "Année") {
        select.classList.add("is-valid");
        select.classList.remove("is-invalid");
        return true;
    } else {
        select.classList.add("is-invalid");
        select.classList.remove("is-valid");
        return false;
    }
}

// Vérification que l'email est valide
function validateMail(input) {
    // Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Vérification que le mot de passe est valide
function validatePassword(input) {
    // Définir mon regex (8 caractères, 1 minuscule, 1 majuscule, 1 chiffre)
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Vérification que la confirmation du mot de passe correspond au mot de passe
function validateConfirmPassword(inputConfirmPassword, inputPassword) {
    if (inputConfirmPassword.value === inputPassword.value) {
        inputConfirmPassword.classList.add("is-valid");
        inputConfirmPassword.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPassword.classList.add("is-invalid");
        inputConfirmPassword.classList.remove("is-valid");
        return false;
    }
}