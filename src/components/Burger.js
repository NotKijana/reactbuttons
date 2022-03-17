import { Component } from 'react'; 

class Burger extends Component {
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
            <div className={this.props.currentClass + " " + this.props.burgerType + " "  
                + (this.state.open ? 'open' : 'closed')} onClick={this.handleClick}
            >
                <div className={'button one ' + this.props.name + ' ' + (this.state.open ? 'open' : 'closed')}></div>
                <div className={'button two ' + this.props.name + ' ' + (this.state.open ? 'open' : 'closed') }></div>
                <div className={'button three ' + this.props.name + ' ' + (this.state.open ? 'open' : 'closed')}></div>
            </div>
        )
    }
}

export default Burger;