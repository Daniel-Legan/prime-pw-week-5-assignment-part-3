console.log('***** Music Collection *****')

let collection = [];

function addToCollection(x, y, z) {
    collection.push({"title": x, "artist": y, "yearPublished": z});
    return console.log('the album added to collection:', collection[collection.length-1]);
}

addToCollection('hello', 'beyonce', '2022');
addToCollection('goodbye', 'gaga', '2018');
addToCollection('tomorrow', 'potato', '2018');
addToCollection('grape', 'letter', '2011');
addToCollection('grape', 'apple', '2009');
addToCollection('i love you', 'pear', '1967');

console.log('the whole collection of albums:', collection);
console.log(collection[1]);