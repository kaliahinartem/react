function getMood() {
	const moods = ['angry', 'hungry', 'silly', 'paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}


class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>
					My current mood is : {getMood()}
				</h1>
			</div>
		);
	}
}

// function Hello() {
// 	return (
// 		<h1>Hello there!</h1>
// 	);
// }

ReactDOM.render(<Hello/>, document.getElementById('root'));