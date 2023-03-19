import React, {FunctionComponent} from "react";
import '../css/LandingPage.css'

export const LandingPage: FunctionComponent = () => {
    return (
        <div className={"LandingParent"}>
            <div className={"LandingPage"}>
                <img src={process.env.PUBLIC_URL + '/dt_napes.jpg'} alt={"Homepage Photo"}></img>
            </div>
            <div className={"Greeting"}>
                <p>Hi, my name is Nivethan Sethupathi. Hope you like what you see and hear.
                Please feel free to reach out!
                </p>
            </div>
        </div>

    )
}