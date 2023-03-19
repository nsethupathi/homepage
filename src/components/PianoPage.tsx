import {FunctionComponent} from "react";
import {PianoSection} from "./PianoSection";

export const PianoPage: FunctionComponent = () => {
    return (
        <div className={"PianoParent"}>
            <PianoSection/>
        </div>
    )
}