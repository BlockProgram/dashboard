document.addEventListener("DOMContentLoaded", function() {
  // FORTUNE DASHBOARD : Take input from TextArea, print it to page, save it to localStorage,
  // calculate percentage and save to localStorage. Then synchronize % & progress bar

  let inputAmount = document.querySelector("#input-amount");
  let percentage = document.querySelector("#percentage-fortune");
  let goalAmount = document.getElementById("goal-amount").textContent;
  let progressBar = document.querySelector(".actualprogress-obj3");
  let localInput = localStorage.getItem("input");
  let localPercentage = localStorage.getItem("percentage");

  inputAmount.innerHTML = localInput;
  percentage.innerHTML = localPercentage;
  progressBar.style.width = localPercentage + "%";

  function calculateThenStore(event) {
    let textArea = new Number(event.target.amount.value);
    localStorage.setItem("input", textArea);
    let roundPercentage = Math.round((textArea / goalAmount) * 100);
    localStorage.setItem("percentage", roundPercentage);
  }
  let button = document.querySelector("#input-fortune");
  button.addEventListener("submit", calculateThenStore);

  //ADD COLOR SWITCHES

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);

  //SAVE CHECKED CHECKBOXES
  //   // https://www.sitepoint.com/quick-tip-persist-checkbox-checked-state-after-page-reload/

  var checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {},
    $checkboxes = $(".check-dash");

  $checkboxes.on("change", function() {
    $checkboxes.each(function() {
      checkboxValues[this.id] = this.checked;
    });

    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
  });

  // On page load
  $.each(checkboxValues, function(key, value) {
    $("#" + key).prop("checked", value);
  });
});

// ATTEMPT TO Refactore CHECKBOXES
// var checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {};
// const checkBoxes = document.querySelectorAll(".check-dash");

// checkBoxes.forEach(checkbox => {
//   checkbox.addEventListener("change", () => {
//     checkboxValues[this.id] = this.checked;
//   });

//   // checkBoxes.addEventListener("change", () => {
//   //   checkBoxes.forEach(() => {
//   //     checkboxValues[this.id] = this.checked;
//   //   });

//   localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
// });

// function initialize(checkbox) {
//   checkbox.forEach(function(key, value) {
//     checkbox("#" + key).setAttribute("checked", value);
//   });
// }

//Pick a new quote randomly on loading
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.querySelector(
  ".dash-object5 .statement-obj5 .quote-author"
);

let quote1 = {
    author: "Malcolm X",
    text: "The future belongs to those who prepare for it today."
  },
  quote2 = {
    author: "50 Cent",
    text: "Get rich or die tryin'"
  },
  quote3 = {
    author: "David Goggins",
    text: "Suffer motherfucker"
  },
  quote4 = {
    author: "A rich guy",
    text: "The most powerful force in the universe is compound interest. "
  },
  quote5 = {
    author: "Me",
    text: "Only death can stop me"
  },
  quote6 = {
    author: "Gary Vee",
    text: "Hustle for years and be grateful for it"
  },
  quote7 = {
    author: "Ray Kurzweil",
    text: "The singularity is coming"
  },
  quote8 = {
    author: "Serge Faguet",
    text:
      "One of the many cool, ultrapowerful and ultraintelligent posthuman beings."
  };
let quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8];

// Randomize and print quote
window.onload = function randomQuote() {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  const random = Math.floor(Math.random() * quotes.length);

  const chosenQuote = quotes[random];

  quoteText.innerText = chosenQuote.text;
  quoteAuthor.innerText = chosenQuote.author;
};
