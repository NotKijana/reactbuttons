import Burger from "./Burger";

function BurgerContainer(props) {
    const {name} = props;
    return(
        <div className={'buttons_container ' + name}>
            <h3 className="button_header">
                {name} button
            </h3>

            <Burger currentClass="button_container" name={name} />
        </div>
    )
}

export default BurgerContainer;