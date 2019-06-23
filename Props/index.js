class App extends React.Component {
    render() {
        return (
            <div>
                <SayHi
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                />
                <SayHi
                    to="Gringo"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));