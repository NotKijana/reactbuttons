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
        const {type} = this.props;
        return (    
            <div className={'container '+ type} onClick={this.handleClick}>
                <h2 className='name txt-l'>
                    {type}
                </h2>
                <input type="checkbox" name={ type } className='hidden' id={ type } />

                <label htmlFor={type} className={`burger ${type}`}>
                    <div className={'topping one ' + type + ' ' + (this.state.open ? 'open' : 'closed')}></div>
                    <div className={'topping two ' + type + ' ' + (this.state.open ? 'open' : 'closed') }></div>
                    <div className={'topping three ' + type + ' ' + (this.state.open ? 'open' : 'closed')}></div>
                </label>
            </div>
        )
    }
}

export default Burger;