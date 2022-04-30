const passForm = document.querySelector('form');
const showResult = document.querySelector('#result');


passForm.addEventListener('submit', (peter) => {
    peter.preventDefault();

    class Percentage {
        formPass = parseFloat(passForm.passInput.value);
        formPass2 = parseFloat(passForm.passInput2.value);
        totalVal = (this.formPass / 100 * this.formPass2).toLocaleString('en');

        constructor() {
            this.formPass;
            this.totalVal;
            this.formPass2

            showResult.textContent = `${this.formPass2}% of ${this.formPass} is ${this.totalVal}`; 
            showResult.classList.toggle('resultan');  
            
            if (isNaN(this.formPass) || isNaN(this.formPass2))  {
                showResult.textContent = 'input a valid character'; 

            };
             
                    
        };
    }
    new Percentage();

})


