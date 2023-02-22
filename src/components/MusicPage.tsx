import {FunctionComponent} from "react";
import "../css/MusicPage.css"
import {SoundCloudSection} from "./SoundCloudSection";

export const MusicPage: FunctionComponent = () => {
    return (
        <div className={"MusicParent"}>
            <details>
                <summary>Live Instrument Recordings</summary>
                <SoundCloudSection/>
            </details>
            <details>
                <summary>Piano Performances</summary>
                <div className={"PianoParent"}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fVTRI1FM6xU"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </details>
        </div>


    )
}