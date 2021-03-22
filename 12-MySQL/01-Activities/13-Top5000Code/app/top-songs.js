const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Mayaki1909',
  database: 'top_songsDB',
});



const queryAllSongs = () => {
  connection.query('SELECT * FROM top5000', (err, res) => {
    if (err) throw err;
    res.forEach(({song}) => {
      console.log(`${song}`);
    });
    console.log('-----------------------------------');
  });

  const querySameArtist = () => {
    connection.query('SELECT * FROM top5000 WHERE id=? LIMIT ?, 5,[ user_id, start ]', (err, res) => {
      if (err) throw err;
      res.forEach(({song}) => {
        console.log(`${song}`);
      });
      console.log('-----------------------------------');
    });

 /*  // logs the actual query being run
  console.log(query.sql);
  connection.end(); */
};
/* 
const queryDanceSongs = () => {
  const query = connection.query(
    'SELECT * FROM songs WHERE genre=?',
    ['Dance'],
    (err, res) => {
      if (err) throw err;
      res.forEach(({ id, title, artist, genre }) => {
        console.log(`${id} | ${title} | ${artist} | ${genre}`);
      });
    }
  );

}; */

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  queryAllSongs();
});
