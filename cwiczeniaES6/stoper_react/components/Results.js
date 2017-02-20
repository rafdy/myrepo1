class Results extends React.Component {

  pad0(value) {
      let result = value.toString();
      if (result.length < 2) {
          result = '0' + result;
      }
      return result;
  }

	render() {
      if (resultAdded) {
        return (
          <li class='listElement'>`${pad0(this.times.minutes)}:${pad0(this.times.seconds)}:${pad0(Math.floor(this.times.miliseconds))}`</li>
        );
      }
	}
}