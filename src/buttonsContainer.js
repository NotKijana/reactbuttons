import React from "react";
import Button from "./button";

function ButtonsContainer(props) {
    return(
        <div className={'buttons_container ' + props.name}>
            <h3 className="button_header">
                {props.name} button
            </h3>

            <Button currentClass="button_container" name={props.name} />
        </div>
    )
}

export default ButtonsContainer;