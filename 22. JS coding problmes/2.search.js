const lyrics = 'Tumi bOndu kaLa paKhi ami jenO Ki';

const searchString = 'pakhI';
console.log(lyrics.includes(searchString));

// lyrics purotakei LowerCase kore nibo
const lyricsLowerCase = lyrics.toLowerCase();
console.log(lyricsLowerCase);

// serach ta ke o LowerCase kore nibo

const searchLowerCase = searchString.toLowerCase();
console.log(searchLowerCase);

// const doesExist = lyrics.includes(searchString);
// console.log(doesExist);

const doesExist_N = lyricsLowerCase.includes(searchLowerCase);
console.log(doesExist_N);

// in one line

const doexExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doexExistOneLine);


// .................................

// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.toLowerCase().indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

//

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string');
}

else{
    console.log('cannot find it');
}

// startsWith

console.log(lyrics.startsWith('Tumi'));

//endswith

const fileName = "mybiodata.pdf";
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));