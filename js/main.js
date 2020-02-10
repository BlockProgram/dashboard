// FORTUNE DASHBOARD 


//Print value from the textArea to the firsttext-fortune value 
function printAmountCalculate(event) {
    // Prevent an element to execute as usual, in this case, the submit button 
    // doesn't refresh the page each time it's clicked 
    event.preventDefault(); 
    let textArea    = new Number(event.target.amount.value);
    let goalAmount  = document.getElementById("goal-amount").textContent; 
    let inputAmount = document.querySelector("#input-amount");
    let percentage  = document.querySelector("#percentage-fortune"); 
    let progressBar = document.querySelector(".actualprogress-obj3"); 
    
    if (!!textArea ===  true) {  
        inputAmount.innerHTML   = `${textArea} /`;
        let rawPercentage       = `${textArea / goalAmount * 100}`; 
        percentage.innerHTML    = Math.round(rawPercentage) + '%'; 
        progressBar.style.width = rawPercentage +'%'; 
    } else {  
        inputAmount.innerHTML = `O /`;
        }  
    }
    
    document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("#input-fortune");
    button.addEventListener("submit", printAmountCalculate);
});


//ADD COLOR SWITCHES 
document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

}) 