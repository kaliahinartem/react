class SlotMachine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const colors = {fontSize: '50px', backgroundColor: 'pink'};
        return (
            <div className='SlotMachine'>
                <p style={colors}>
                    {s1} {s2} {s3}
                </p>
                {winner ? 'You win' : 'You lose'}
            </div>
        );
    }

}