import {FunctionComponent} from "react";
import "../css/MusicPage.css"
import {SoundCloudSection} from "./SoundCloudSection";
import {PianoSection} from "./PianoSection";

export const MusicPage: FunctionComponent = () => {
    return (
        <div className={"MusicParent"}>
            <details>
                <summary>Live Instrument Recordings</summary>
                <SoundCloudSection/>
            </details>
            <details>
                <summary>Piano Performances</summary>
                <PianoSection/>
            </details>
        </div>


    )
}