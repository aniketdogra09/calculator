document.addEventListener("DOMContentLoaded",()=>{
    const display=document.getElementById('display-area');
    const buttons=document.querySelectorAll('.btn-key');

    let currentInput='';
    let previousInput='';
    let operator='';

    buttons.forEach(button => {
        button.addEventListener('click',()=>{
            const value=button.getAttribute('data-value');

            if(button.id==='all-clear'){
                // console.log("AC button is clicked!");
                currentInput='';
                previousInput='';
                operator='';
                display.textContent='0'; /* can append by other ways too */
                return;
            }
            if(button.id==='equals'){
                // console.log('expression result demanded!')
                if(currentInput&&previousInput&&operator){
                    currentInput=eval(`${previousInput}${operator}${currentInput}`);
                    console.log(currentInput);
                    display.textContent=currentInput;
                    previousInput='';
                    operator='';
                }
                return;
            }
            if(button.classList.contains('btn-key-operator')){
                // console.log("an operator added to expression");
                if(currentInput){
                    if(previousInput){
                        previousInput=eval(`${previousInput}${operator}${currentInput}`);
                        display.textContent=previousInput;
                    }
                    else{
                        previousInput=currentInput;
                    }
                    operator=value;
                    currentInput='';
                    }
                    return;
            }
            if(currentInput===''&&value==='.'){
                // console.log("we are dealing with floating numbers!");
                currentInput='0.';
            }
            else if(currentInput.includes('.')&&value==='.'){
                return;
            }
            else{
                //console.log("the expression is being generated");
                currentInput+=value;
            }
            display.textContent=currentInput;

        });
    });
});