console.log('***** Music Collection *****')

let collection = [];

function addToCollection(x, y, z, arr) {
    collection.push({'title': x, 'artist': y, 'yearPublished': z, 'tracks': arr});
}

function showCollection(x) {
    console.log('the number of albums in this collection is:', x.length);
    for(let object of x) {
        console.log(object.title, 'by', object.artist, 'published in,', object.yearPublished + ':');
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

function search(x, y) {
    let array = [];
    if(y === undefined || x === undefined) {
        return collection;
    }
    for(i = 0; i < collection.length; i++) {
        if(x === collection[i].artist && y === collection[i].yearPublished) {
            array.push(collection[i]);
        }
    }
    return array;
}

const adele25Tracks = [['hello', 295], ['when we were young', 290], ['water under the bridge', 240]];

addToCollection('25', 'adele', '2015', adele25Tracks);
addToCollection('an evening with silk sonic', 'silk sonic', '2021');
addToCollection('drunk', 'thundercat', '2017');
addToCollection('it is what it is', 'thundercat', '2020');
addToCollection('"awaken, my love!"', 'childish gambino', '2016');
addToCollection('chromatica', 'lady gaga', '2020');

console.log('the whole collection of albums:', collection);

showCollection(collection);

console.log(findByArtist('thundercat'));
console.log(findByArtist('lady gaga'));
console.log(findByArtist('a potato'));

console.log(search('adele', '2015'));
console.log(search('adele', '2016')); //returns empy array
console.log(search('adele')); //returns collection with only one input parameter
console.log(search()); //returns collection with no input parameters

//console.log(collection[0].tracks[1][0]);
//console.log(collection[0].tracks.length);