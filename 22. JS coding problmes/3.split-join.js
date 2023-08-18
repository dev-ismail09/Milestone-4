// split
const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. sada sada kala kala.';
const parts = lyrics.split(' ');
const sentences = lyrics.split(".");
const chars = lyrics.split('');
console.log(parts);
// console.log(sentences);
// console.log(chars);

// slice - index onujae

const partial = lyrics.slice(5, 8); // 5 index theke suru but 8 er age porjonto mane 7 index porjonto nibe
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);


//
const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    ' bosonto kale tomai bolte pari ni',
    ' sada sada kala kala',
    ''
  ];

const newSong = lines.join(' + ');
console.log(newSong);  