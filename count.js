const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

//Unique words
let uniques = {};
// All words in the text
let words = sonnet.match(/\w+/g);

// Iterate through `words` and build up an associative array of unique words.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques[word]) {
    uniques[word] += 1;
  } else {
    uniques[word] = 1;
  }
}

console.log(uniques)

function numberCompare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

let altStringMessage = (string) => {
    if (string) {
        return "The string is nonempty";
    } else if (string) {
        return "It's an empty string";
    }
}

function square (a, b) {
    if (a > b) {
        return (Math.sqrt(a, b));
    } else if (a < b) {
        return (Math.sqrt(a,b));
    } else {
        return Math.sqrt;
    }
}

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];
let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
alert(`Hello, world! Happy ${dayName}.`);

function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}