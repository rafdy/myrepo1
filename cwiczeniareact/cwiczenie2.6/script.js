var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
        console.log('Pobrano domyślne propsy')
    },

    componentWillMount: function() {
        console.log('Zaraz zamontujemy komponent w DOM')
    },

    componentDidMount: function() {
        console.log('Komponent zamontowany w DOM')
    },

    componentWillReceiveProps: function() {
        console.log('Komponent otrzymuje nowe propsy')
    },

    componentWillUpdate: function() {
        console.log('Ponowny rendering komponentu')
    },

    componentDidUpdate: function() {
        console.log('Ponowny rendering przeprowadzony')
    },

    componentWillUnmount: function() {
        console.log('Kończymy')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1 
        });
    },

    render: function() {
        return React.createElement('div', {}, 
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('input', {type: 'button', name: 'dodawanie', value: 'Dodaj', onClick: this.increment}),
            React.createElement('input', {type: 'button', name: 'odejmowanie', value: 'Odejmij', onClick: this.decrement})
        );
    }
});

var counter1 = React.createElement(Counter);
ReactDOM.render(counter1, document.getElementById('counter1'));

var counter2 = React.createElement(Counter);
ReactDOM.render(counter2, document.getElementById('counter2'));