import {FunctionComponent} from "react";
import "../css/MusicPage.css"
import {LiveInstrumentSong} from "./LiveInstrumentSong";

export const MusicPage: FunctionComponent = () => {

    return (
        <div className="MusicParent">
            <h1>Tilting</h1>
            <h2>Fever Dream</h2>
            <br></br><br></br>
            <LiveInstrumentSong title={"Snow Girls"} path={process.env.PUBLIC_URL + '/music/snowgirls.mp3'} />
            <LiveInstrumentSong title={"Hey Vera"} path={process.env.PUBLIC_URL + '/music/heyvera.mp3'} />
            <LiveInstrumentSong title={"Kenosha"} path={process.env.PUBLIC_URL + '/music/kenosha.mp3'} />
            <LiveInstrumentSong title={"The Way Down"} path={process.env.PUBLIC_URL + '/music/waydown.mp3'} />
        </div>
    );
}