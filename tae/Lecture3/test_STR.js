const bookOBj = {
    title: "Become",
    author: "Michelle Obama",
    isAvailable: false,
};

const bookjson = JSON.stringify(bookOBj);

console.log(bookjson);
console.log(typeof bookjson);

const receivedbookOBJ = JSON.parse(bookjson);

console.log(receivedbookOBJ);
console.log(typeof receivedbookOBJ);