console.log('***** Music Collection *****')

let collection = [];

function addToCollection(x, y, z) {
    collection.push({'title': x, 'artist': y, 'yearPublished': z});
    return console.log('the album added to collection:', collection[collection.length-1]);
}

function showCollection(album) {
    console.log('the number of albums in this collection is:', collection.length);
    for(let object of album) {
        //console.log('TITLE by ARTIST, publushed in YEAR');
        console.log(object.title, 'by', object.artist, 'published in,', object.yearPublished);
    }
}

addToCollection('hello', 'beyonce', '2022');
addToCollection('goodbye', 'gaga', '2018');
addToCollection('tomorrow', 'potato', '2018');
addToCollection('grape', 'letter', '2011');
addToCollection('grape', 'apple', '2009');
addToCollection('i love you', 'pear', '1967');

console.log('the whole collection of albums:', collection);

showCollection(collection);
console.log(collection[0].title)