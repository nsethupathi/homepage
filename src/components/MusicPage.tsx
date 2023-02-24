import {FunctionComponent} from "react";
import "../css/MusicPage.css"
import {PianoSection} from "./PianoSection";
import {Player} from "./audioplayer/CustomAudioPlayer"

const tracks = [
    {
        url: process.env.PUBLIC_URL + '/snowgirls.mp3',
        title: "Nivethan Sethupathi - Snow Girls",
        tags: ["rock"],
    },
    {
        url: process.env.PUBLIC_URL + '/heyvera.mp3',
        title: "Nivethan Sethupathi - Hey Vera",
        tags: ["rock"],
    },
    {
        url: process.env.PUBLIC_URL + '/kenosha.mp3',
        title: "Nivethan Sethupathi - Kenosha",
        tags: ["rock"],
    },
];

export const MusicPage: FunctionComponent = () => {
    return (
        <div className={"MusicParent"}>
            <details>
                <summary>Live Instrument Recordings</summary>
                <Player trackList={tracks} />
            </details>
            <details>
                <summary>Piano Performances</summary>
                <PianoSection/>
            </details>
        </div>


    )
}