const furniture = ['table', 'chairs', 'couch'];

//for (let i = 0; i < furniture.length; i++) {
//    console.log(furniture[i]);
//}


furniture.forEach(item => {
    for (const char of item) {
        console.log(char);
    }});   