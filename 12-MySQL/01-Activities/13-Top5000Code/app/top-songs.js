const mysql = require("mysql");
const inquirer = require('inquirer');


// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "top_songsDB"
  });


  // creting connectiong, throw is error and than kick off the fuction searchPrompts
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    searchPrompts();
  });
  
// prompt the inquirer prompts and give each pption a fuction with a switch statement
const searchPrompts = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Find songs by artist',
        'Find all artists who appear more than once',
        'Find data within a specific range',
        'Search for a specific song',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Find songs by artist':
          artistSearch();
          break;

        case 'Find all artists who appear more than once':
          multiSearch();
          break;

        case 'Find data within a specific range':
          rangeSearch();
          break;

        case 'Search for a specific song':
          songSearch();
          break;

        case 'Exit':
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
  };



    const artistSearch = () => {
      inquirer
        .prompt({
          name: 'artist',
          type: 'input',
          message: 'What artist would you like to search for?',
        })
        .then((answer) => {

          // this is the query where we are serching 
          // SELECT the columns we are serching for FROM the table WHERE (? = users input)
          const query = 'SELECT position, song, year FROM top5000 WHERE ?';

          // Query callback function using the input or ? to console log answers
          connection.query(query, { artist: answer.artist }, (err, res) => {
            if (err) throw err;

            //for each item we are cosnole logging below
            res.forEach(({ position, song, year }) => {
              console.log(
                `Position: ${position} || Song: ${song} || Year: ${year}`
              );
            });

            //go back to search 
            searchPrompts();
          });
        });
    };
  


const multiSearch = () => {

          // this is the query where we are serching 
          // SELECT the artist FROM the table GROUP BY common link HAVING more than 1 entry
  const query =
    'SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1';
  connection.query(query, (err, res) => {
    if (err) throw err;
    res.forEach(({ artist }) => console.log(artist));
    searchPrompts();
  });
};

// Search from one point to anther 10-30

const rangeSearch = () => {
  inquirer
    .prompt([
      {
        name: 'start',
        type: 'input',
        message: 'Enter starting position: ',

        //VALIDATE INPUT
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
      {
        name: 'end',
        type: 'input',
        message: 'Enter ending position: ',
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then((answer) => {

      //SELECT columns needed FROM table WHERE the position is BETWEEN input/? AND input/? 
      const query =
        'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
      connection.query(query, [answer.start, answer.end], (err, res) => {
        if (err) throw err;
        res.forEach(({ position, song, artist, year }) =>
          console.log(
            `Position: ${position} || Song: ${song} || Artist: ${artist} || Year: ${year}`
          )
        );
        searchPrompts();
      });
    });
};


const songSearch = () => {
  inquirer
    .prompt({
      name: 'song',
      type: 'input',
      message: 'What song would you like to look for?',
    })
    .then((answer) => {
      console.log(`You searched for "${answer.song}"`);
      connection.query(
        'SELECT * FROM top5000 WHERE ?',
        { song: answer.song },
        (err, res) => {
          if (err) throw err;
          if (res[0]) {
            console.log(
              `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
            );
            searchPrompts();
          } else {
            console.error('Song not found :(\n');
            searchPrompts();
          }
        }
      );
    });
};


