const book = {
    title: '1984',
    author: 'George Orwell',
    isAvailable: true,
    checkOut: function() {
        this.isAvailable = false;
    },
    checkIn: function() {
        this.isAvailable = true;
    }
};
console.log(book.isAvailable); // Output: 1984
book.checkOut();
console.log(book.isAvailable); // Output: false
book.checkIn();
console.log(book.isAvailable); // Output: true      
