let Phrase = require("mhartl-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing.");
    let phrase = new Phrase(string);

    if (phrase .palindrome()) {
        alert(`"${phrase.content}" is a palindrome!`);
    } else {
        alert(`"${phrase.content}" is not a palindrome.`)
    }  
}

let button = document.querySelector("#palindromeTester");
//alert(new Phrase("Madam, I'm Adam.").palindrome());