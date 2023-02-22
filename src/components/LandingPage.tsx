import React, {FunctionComponent} from "react";
import './LandingPage.css'
import {Link} from "react-router-dom";

export const LandingPage: FunctionComponent = () => {
    return (
        <div className={"LandingPage"}>
            <img src={process.env.PUBLIC_URL + '/dt_napes.jpg'} alt={"Homepage Photo"}></img>
        </div>
    )
}