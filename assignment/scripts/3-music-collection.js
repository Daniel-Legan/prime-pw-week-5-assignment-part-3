console.log('***** Music Collection *****')

let collection = [];

function addToCollection(x, y, z) {
    collection.push({'title': x, 'artist': y, 'yearPublished': z});
    return console.log('the album added to collection:', collection[collection.length-1]);
}

function showCollection(album) {
    console.log('the number of albums in this collection is:', collection.length);
    for(let object of album) {
        console.log(object.title, 'by', object.artist, 'published in,', object.yearPublished);
    }
}

function findByArtist(x) {
    let array = [];
    for(let i = 0; i < collection.length; i++) {
        if(collection[i].artist === x) {
            array.push(collection[i]);
        }
    }
    return array;
}

addToCollection('hello', 'adele', '2015');
addToCollection('fly as me', 'bruno mars', '2021');
addToCollection('them changes', 'thundercat', '2017');
addToCollection('funny thing', 'thundercat', '2020');
addToCollection('redbone', 'childish gambino', '2016');
addToCollection('the cure', 'lady gaga', '2017');

console.log('the whole collection of albums:', collection);

showCollection(collection);

console.log(findByArtist('thundercat'));
console.log(findByArtist('lady gaga'));
console.log(findByArtist('a potato'));