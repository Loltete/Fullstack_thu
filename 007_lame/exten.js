class Media{
    constructor(info) {
        this.pub = info.pub;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songdata){
        super(songdata);
        this.artist = songdata.artist;
    }
}

const mySong = new Song({
    artist:"tae",
    name: "techawit",
    pub: 1999
});

console.log(mySong)
console.log(mySong.name)