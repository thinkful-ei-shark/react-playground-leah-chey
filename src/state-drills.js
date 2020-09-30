import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
    }


    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

        handleButtonClick = () => {
            this.setState ({spinningTheChamber: true})
            this.timeout = setTimeout(() =>{
                const randomCount = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomCount,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay () {
        const { chamber, spinningTheChamber } = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return 'you\'re safe!'
        }
    }

    render(){
        return (
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}