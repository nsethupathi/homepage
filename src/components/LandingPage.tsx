import React, {FunctionComponent} from "react";
import '../css/LandingPage.css'

export const LandingPage: FunctionComponent = () => {
    return (
        <div className={"LandingParent"}>
            <div className={"LandingPage"}>
                <img src={process.env.PUBLIC_URL + '/dt_napes.jpg'} alt={"Homepage Photo"}></img>
            </div>
            <div className={"Greeting"}>
                <p>Hi, my name is Nivethan Sethupathi. I built this website as a place to show you my music and photography.
                Please feel free to reach out!
                </p>
            </div>
        </div>

    )
}