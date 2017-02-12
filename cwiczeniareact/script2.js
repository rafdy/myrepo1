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


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
      )
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});

var MoviePic = React.createClass({
  propTypes: {
    pic: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('img', {src: this.props.pic})
  }
});

var Movie = React.createClass({
	propTypes: {
    movieItem: React.PropTypes.object.isRequired,
  	},

    render: function() {
  	return React.createElement('li', {},
      React.createElement(MovieTitle, {title: this.props.movieItem.title}),
      React.createElement(MovieDescription, {desc: this.props.movieItem.desc}),
      React.createElement(MoviePic, {pic: this.props.movieItem.pic})
    );
	}
});

var MovieList = React.createClass({
	propTypes: {
    moviesel: React.PropTypes.array.isRequired,
   	},

	render: function() {
      var moviesElements = this.props.moviesel.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movieItem: movie});
      });

		React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'), 
		React.createElement('ul', {}, moviesElements)
		); 
	}
});

var movieLi = React.createElement(MovieList, {moviesel: movies});
ReactDOM.render(movieLi, document.getElementById('app'));