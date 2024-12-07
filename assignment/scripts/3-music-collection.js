console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
function addToCollection( collection, title, artist, yearPublished, tracks = []) {
  const album = {
    title: title,
    artist: artist
    yearPublished: yearPublished
    tracks: tracks
  };
  collection.push(album);

  return album;
}

console.log(addToCollection(myCollection, " last Christmas", 'George Michael', 1978));
console.log(addToCollection(myCollection, "Thriller", 'Michael Jackson', 1990));
console.log(addToCollection(myCollection, 'will always love you', 'whitney houston', 1987));
console.log(addToCollection(myCollection, 'you remind me ', 'Usher', 1996));
console.log(addToCollection(myCollection, "here and now", 'marvin gaye' , 1984));
console.log(addToCollection(myCollection, 'burn', 'Usher', 1998));





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
