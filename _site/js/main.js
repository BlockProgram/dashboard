// FORTUNE DASHBOARD : Take input from TextArea, print it to page, save it to localStorage,
// calculate percentage and save to localStorage. Then synchronize % & progress bar
document.addEventListener("DOMContentLoaded", function() {

    let inputAmount     = document.querySelector("#input-amount");
    let percentage      = document.querySelector("#percentage-fortune");
    let goalAmount      = document.getElementById("goal-amount").textContent;
    let progressBar     = document.querySelector(".actualprogress-obj3"); 
    let localInput      = localStorage.getItem("input"); 
    let localPercentage = localStorage.getItem("percentage"); 

        inputAmount.innerHTML   = localInput;
        percentage.innerHTML    = localPercentage;
        progressBar.style.width = localPercentage +'%'; 

   function calculateThenStore(event) { 

        let textArea = new Number(event.target.amount.value);
        localStorage.setItem("input", textArea);
        let roundPercentage = Math.round(textArea / goalAmount * 100); 
        localStorage.setItem("percentage", roundPercentage); 
  
    }  
    let button = document.querySelector("#input-fortune");
    button.addEventListener("submit", calculateThenStore);
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