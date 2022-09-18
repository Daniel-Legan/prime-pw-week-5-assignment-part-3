console.log('***** Music Collection *****')

let collection = [];

function addToCollection(x, y, z, arr) {
    collection.push({'title': x, 'artist': y, 'yearPublished': z, 'tracks': arr});
}

function showCollection(x) {
    console.log('the number of albums in this collection is:', x.length);
    for(let album of x) {
        console.log(album.title, 'by', album.artist, 'published in,', album.yearPublished + ':');
        for(let i = 0; i < album.tracks.length; i++) {
            console.log(i+1 + '. song: ' + album.tracks[i][0] + ', seconds: ' + album.tracks[i][1]);
        }
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

function search(artist, year, trackName) { //not an object input parameter, my mistake
    let array = [];
    if(!artist || !year || !trackName) {
        return collection;
    }
    for(let i = 0; i < collection.length; i++) { //6
        if(artist === collection[i].artist && year === collection[i].yearPublished) {
            for(let j = 0; j < collection[i].tracks.length; j++) {
                if(trackName === collection[i].tracks[j][0])
                array.push(collection[i]);
            }
        }
    }
    return array;
}

const adele25Tracks = [['hello', 295], ['when we were young', 290], ['water under the bridge', 240]];
const silkSonicAnEveningWithSilkSonicTracks = [['leave the door open', 244], ['fly as me', 216]];
const thundercatDrunkTracks = [['friend zone', 192], ['them changes', 188], ['drunk', 102], ['lava lamp', 178]];
const thundercatItIsWhatItIsTracks = [['dragonball durag', 189]];
const childishGambinoAwakenMyLoveTracks = [['redbone', 326]];
const ladyGagaChromaticaTracks = [['stupid love', 193], ['rain on me', 182], ['sour candy', 157]];

addToCollection('25', 'adele', '2015', adele25Tracks);
addToCollection('an evening with silk sonic', 'silk sonic', '2021', silkSonicAnEveningWithSilkSonicTracks);
addToCollection('drunk', 'thundercat', '2017', thundercatDrunkTracks);
addToCollection('it is what it is', 'thundercat', '2020', thundercatItIsWhatItIsTracks);
addToCollection('"awaken, my love!"', 'childish gambino', '2016', childishGambinoAwakenMyLoveTracks);
addToCollection('chromatica', 'lady gaga', '2020', ladyGagaChromaticaTracks);

console.log('the whole collection of albums:', collection);

showCollection(collection);

console.log(findByArtist('thundercat'));
console.log(findByArtist('lady gaga'));
console.log(findByArtist('a potato')); //returns empty array if not found


console.log(search('adele', '2015', 'hello'));
console.log(search('adele', '2015', 'water under the bridge'));
console.log(search('silk sonic', '2021', 'song not in album'));
console.log(search('adele', '2016')); //returns entire collection with only two input parameters
console.log(search('adele')); //returns entire collection with only one input parameter
console.log(search()); //returns entire collection with no input parameters

//testing section

//console.log(collection[0].tracks[1][0]);
//console.log(collection[0].tracks.length);

let me = {
    height: 72,
    sex: 'male',
    favoriteOutfits: [['t-shirt', 'jeans'], ['sweatshirt','hoody'], ['suit', 'formal pants'], ['sweatshirt', 'poncho']]
}

function searchII(firstitem) {
    let arr = [];
    for(let i = 0; i < me.favoriteOutfits.length; i++) { //3
        if(me.favoriteOutfits[i][0] === firstitem) {
            arr.push(me.favoriteOutfits[i]);
        }
    }
    return arr;
}

console.log(me);
console.log(me.favoriteOutfits.length);

for(let i = 0; i < me.favoriteOutfits.length; i++) {
    console.log(me.favoriteOutfits[i][1]);
}

console.log(searchII('sweatshirt'));