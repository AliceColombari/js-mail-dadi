// MAIL

// chiedi all'utente la sua email
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull'esito di controllo

// ALERT BENVENUTO
alert('Benvenuto!')

// CREAZIONE LISTA EMAIL
const listaEmail = ['colombari.23@gmail.com', 'fedor1998@icloud.com', 'anonymous@gmail.com'];
console.log(listaEmail);

// CHIEDO ALL'UTENTE L'EMAIL
const emailUtente = prompt('Digita la tua email per verificare se sei tra i partecipanti ')
console.log(emailUtente);

// EMAIL
var emailPresente = false;

// VERIFICO LA PRESENZA DELLA EMAIL UTENTE NELLA LISTA EMAIL
for (let i=0; i < listaEmail.length; i++) {
    console.log(i);

    if (listaEmail[i] == emailUtente) {
        emailPresente = true;
        console.log(emailPresente);
    }
}

// COMUNICO ALL'UTENTE SE PUO ACCEDERE
if (emailPresente == false) {
    console.log('email non presente');

    alert('Non sei autorizzato ad accedere!');
    document.querySelector('.title').innerHTML = 'Non sei autorizzato ad accedere!';

} else {
    console.log('email presente')

    alert('Sei autorizzato ad accedere!');
    document.querySelector('.title').innerHTML = 'Accesso consentito, BENVENUTO!';
}