const getNum = () => Math.floor(Math.random() * 10 + 1);

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        const gif = 'https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif';
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>CONGRATS!</h2>
                    <img src={gif} alt=""/>
                </div>
        } else msg = 'Bad';
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
        );
    }
}