// DATI RICHIESTI
const userName = prompt(`Qual è il tuo nome?`)
const userLastName = prompt(`Qual è il tuo cognome?`)
const userFavouriteColor = prompt(`Qual è il tuo colore preferito?`)

// DATI DEFAULT
const randomNumber = 21

// CREAZIONE PW
const userPassword = `${userName}${userLastName}${userFavouriteColor}${randomNumber}`

// OUTPUT
document.getElementById(`my-pw`).innerHTML = userPassword;