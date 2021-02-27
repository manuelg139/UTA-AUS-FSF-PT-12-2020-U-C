const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?"',
      name: 'languages',
    },
    {
        type: 'input',
        message: 'What is your preferred method of communication?"',
        name: 'method',
      },
      
    ])
    .then((response) => {
    console.log(response);

    const filename = `${response.username.toLowerCase().split('').join('')}.json`;

      fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) => 
        err ? console.log(err) : console.log('Success!')
      );
    

    });
