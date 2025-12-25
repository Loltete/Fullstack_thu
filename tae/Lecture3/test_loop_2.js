const message = "Hello World";
const vowels = "aeiou";

let i = 0;

while (i < message.length) {
    const char = message[i].toLowerCase();

    if (vowels.includes(char)) {
        console.log(char);
    }

    i++;
}

