import React from 'react'; 
import './buttons.css';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
        

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(previousState => ({
            open: !previousState.open
        }))
    }
    render() {
        return (
            <div className={'buttons_container ' + this.props.name}>
                <h3 className="button_header">
                    {this.props.name} button
                </h3>
    
                <div className={"button_container " + this.props.name + " "  + (this.state.open ? 'open' : 'closed')} onClick={this.handleClick}>
                    <div className={'button one ' + this.props.name + ' ' + (this.state.open ? 'open' : 'closed')}></div>
                    <div className={'button two ' + this.props.name + ' ' + (this.state.open ? 'open' : 'closed') }></div>
                    <div className={'button three ' + this.props.name + ' ' + (this.state.open ? 'open' : 'closed')}></div>
                </div>
            </div>
        )
    }
}

export default Buttons;