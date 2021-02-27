// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: 'Soft',
  artist: 'Kings of Leon',
  album:'Call me at midnight',
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
<h2> Title is: ${music.title}</h2>
<p> Artrist is: ${music.artist}</p>
<p>Album is: ${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

