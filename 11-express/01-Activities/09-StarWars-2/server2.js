// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350,
  },
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/:character', (req, res) => {
  const chosen = req.params.character;
  let content;

  // What does this log?
  console.log(chosen);


  for (var i=0; i < characters.length; i++){
    if (characters[i].routeName === chosen){
      content = characters[i];
    
    }
  }
  if (!content) res.status(404).send();

  res.json(content);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));