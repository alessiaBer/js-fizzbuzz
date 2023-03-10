/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” */

//creo un for loop che stampi nella console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    //dichiaro un if statement per definire cosa loggare nella console nel caso:
    if (i % 3 === 0 && i % 5 === 0) {
        // il numero sia un multiplo sia di 3 che di 5
        console.log('FizzBuzz');
    } else if ( i % 3 === 0) {
        //il numero sia un numero solo di 3
        console.log('Fizz');
    } else if (i % 5 === 0) {
        // il numero sia un multiplo solo di 5
        console.log('Buzz');
    } else {
        // il numero non rispecchia nessuno dei casi precedenti
        console.log(i);
    }

}
