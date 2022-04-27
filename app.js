// const parag = document.querySelectorAll('p');

// class Fruits {
//     fruit = 'oranges';
//     nature = 'very sweetS';
    
//     constructor() {
//         parag[0].textContent = this.fruit;
//         parag[1].textContent = this.nature;
//         console.log(this.fruit);
//     }


// }
// new Fruits();

const passForm = document.querySelector('form');
const showResult = document.querySelector('#result');


passForm.addEventListener('submit', (peter) => {
    peter.preventDefault();

    class Percentage {
        formPass = parseFloat(passForm.passInput.value);
        formPass2 = parseFloat(passForm.passInput2.value);
        totalVal = (this.formPass / 100 * this.formPass2).toLocaleString('en');
        notCorrect = NaN;

        constructor() {
            this.formPass;
            this.totalVal;

            if ((this.totalVal))  {
                showResult.textContent = `${this.formPass2}% of ${this.formPass} is ${this.totalVal}`; 
                showResult.classList.add('resultan');  
            };
                    
        };
    }
    new Percentage();

})


