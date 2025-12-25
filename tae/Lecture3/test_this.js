const cat = {
    name: "Whiskers",
    age: 3, 
    whatName: function() {
        return this.name;
    }  
};
const cat2 = {
    name: "charlie",
    age: 5, 
    whatName: function() {
        return this.name;
    }  
};

console.log(cat.whatName());  // Output: Whiskers
console.log(cat2.whatName()); // Output: charlie
