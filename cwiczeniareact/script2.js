var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    pic: './pictures/harry.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    pic: './pictures/lew.jpg'
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

var Movie = React.createClass({
	propTypes: {
    key: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    des: React.PropTypes.string.isRequired,
    pic: React.PropTypes.string.isRequired,
  	},

    render: function() {
  	return React.createElement('li', {key: this.props.key},
      React.createElement('h2', {}, this.props.title),
      React.createElement('p', {}, this.props.des),
      React.createElement('img', {src: this.props.pic})
    );
	}
});

var moviesElements = movies.map(function(movie) {
	return React.createElement('Movie', {key: movie.id, title: movie.title, des: movie.desc, pic: movie.pic});
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'), 
		React.createElement('ul', {}, moviesElements)
		); 

ReactDOM.render(element, document.getElementById('app'));


//var MovieList = React.createClass({
//	propTypes: {
//    moviesel: React.PropTypes.array.isRequired,
//   	},
//
//	render: function() {
//		React.createElement('div', {},
//		React.createElement('h1', {}, 'Lista filmów'), 
//		React.createElement('ul', {}, this.props.moviesel)
//		); 
//	}
//});

//var ml = React.createElement('MovieList', {moviesel: moviesElements});
//ReactDOM.render(ml, document.getElementById('app'));