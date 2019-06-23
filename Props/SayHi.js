class SayHi extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    };
    render() {
        let bangs = "!".repeat(this.props.bangs);
        console.log(this.props);

        return <p>Hi {this.props.to} from {this.props.from}{bangs}</p>;
    }
}