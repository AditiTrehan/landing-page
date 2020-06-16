import React , {Fragment}from "react";

function Text(props){
    const {heading,imgSrc,description} = props;
    return(
        <Fragment>
            <h3>{heading}</h3>
            <img className="bottom-pattern" src={imgSrc} alt="" />
            <p>{description}</p>
        </Fragment>
        
    )
}

export default Text;