var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    pic: ''
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    pic: ''
  },
  {
  	id: 3,
    title: 'Strażak Sam',
    desc: 'Bajka strażaku Samie',
    pic: './pictures/sam.jpg'
  },
  {
  	id: 4,
    title: 'Świnka Peppa',
    desc: 'Bajka o Peppie',
    pic: './pictures/peppa.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.pic})
    );
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'), 
		React.createElement('ul', {}, moviesElements)
		); 

ReactDOM.render(element, document.getElementById('app'));
