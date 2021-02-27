console.log(process.argv)

console.log(process.argv[2])
console.log(process.argv[3])


if (process.argv[2] === process.argv[3]){
    console.log("true");
} else {
    console.log("false");
};



//ran this on terminal 
/* Manuels-MBP:12-Stu_Parameter-Check scamlikely$ node index.js manuel manuel manuel

// console logged this 
[
  '/usr/local/bin/node',
  '/Users/scamlikely/Documents/GitHub/UTA-AUS-FSF-PT-12-2020-U-C/09-NodeJS/01-Activities/12-Stu_Parameter-Check/index.js',
  'manuel',
  'manuel',
  'manuel'
]
manuel
manuel
true */