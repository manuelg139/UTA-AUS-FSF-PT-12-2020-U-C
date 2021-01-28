var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {

        console.log(data[i]); 
        var logInName = document.createElement('h2');
        var gitUrl = document.createElement('a');

      logInName.textContent = data[i].login;
      gitUrl.textContent = data[i].html_url;
      gitUrl.href = data[i].html_url; 
        userContainer.append(logInName);
        userContainer.append(gitUrl);
      
      }
    });
}
fetchButton.addEventListener('click', getApi);
