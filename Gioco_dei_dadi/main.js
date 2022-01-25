// GIOCO DEI DADI

// generare un numero random da 1 a 6 sia per il giocatore sia per il computer
// stabilire chi è il vincitore in base a chi fa il punteggio più alto

const bottone = document.getElementById('click');
const risultato = document.getElementById('risultato');

let numeroPlayer1;
let numeroPlayer2;

bottone.addEventListener('click',
    function() {

        // GIOCATORE 1 LANCIA IL DADO
        alert('Turno Player 1');
        let numeroPlayer1 = Math.floor(Math.random() * 6) + 1;
        console.log(numeroPlayer1);

        document.querySelector('.result_player_one').innerHTML = numeroPlayer1;


        // GIOCATORE 2 LANCIA IL DADO
        alert('Turno Player 2');
        let numeroPlayer2 = Math.floor(Math.random() * 6) + 1;
        console.log(numeroPlayer2);

        document.querySelector('.result_player_two').innerHTML = numeroPlayer2;


        // CONFRONTO TRA I DUE NUMERI USCITI + VINCE CHI HA IL NUMERO PIU ALTO
        if (numeroPlayer1 > numeroPlayer2) {

            console.log('Vince Player 1');
            risultato.innerHTML = ('Player One');

        } else if (numeroPlayer1 == numeroPlayer2){

            console.log('Parità tra i due Players');
            risultato.innerHTML = ('nessuno, entrambi i Players vincono!')

        } else {
            console.log('Vince Player 2');
            risultato.innerHTML = ('Player Two');
        }

    }

);






