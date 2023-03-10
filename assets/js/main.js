/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” */

/* Crea un container nel DOM , 
aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
-`append()` oppure
-`.innerHTML`
-`.insertAdjacentHTML()` */

//richiamo il container nel DOM e lo assegno ad una variabile
const container = document.querySelector('.container');
// creo un ul element e lo assegno ad una variabile
const ulElement = document.createElement('ul');
//aggiungo al container la variabile dell'elemento ul 
container.append(ulElement);

//aggiungo classi per css
ulElement.classList.add('list-unstyled', 'd-flex', 'flex-wrap');


//creo un for loop che stampi nella console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    //creo un li element e lo assegno ad una variabile
    const liElement = document.createElement('li');
    //aggiungo all'elemento ul un elemento li per ogni numero creato nel for loop
    ulElement.append(liElement);

    //aggiungo classi e style per css
    liElement.classList.add('p-2', 'text-white')
/*     liElement.style.width = '10%';
    liElement.style.aspectRatio = '1 / 1'; */

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `${i}`;

    //dichiaro un if statement per definire cosa loggare nella console nel caso:
    if (i % 3 === 0 && i % 5 === 0) {
        // il numero sia un multiplo sia di 3 che di 5
        cardElement.innerHTML = 'Fizz Buzz';
        cardElement.style.backgroundColor = 'var(--bs-indigo)';
    } else if ( i % 3 === 0) {
        //il numero sia un numero solo di 3
        cardElement.innerHTML = 'Fizz';
        cardElement.style.backgroundColor = 'var(--bs-orange';
    } else if (i % 5 === 0) {
        // il numero sia un multiplo solo di 5
        cardElement.innerHTML = 'Buzz';
        cardElement.style.backgroundColor = 'var(--bs-teal)';
    } 

    liElement.append(cardElement);

}

