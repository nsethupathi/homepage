import {FunctionComponent} from "react";
import "../css/MusicPage.css"
import {LiveInstrumentSong} from "./LiveInstrumentSong";

export const MusicPage: FunctionComponent = () => {

    return (
        <>
            <h1>Tilting</h1>
            <h2>The Exit Remedy</h2>
            <br></br><br></br>
            <LiveInstrumentSong title={"Snow Girls"} path={process.env.PUBLIC_URL + '/snowgirls.mp3'} />
            <LiveInstrumentSong title={"Hey Vera"} path={process.env.PUBLIC_URL + '/heyvera.mp3'} />
            <LiveInstrumentSong title={"Kenosha"} path={process.env.PUBLIC_URL + '/kenosha.mp3'} />
            <LiveInstrumentSong title={"The Way Down"} path={process.env.PUBLIC_URL + '/waydown.mp3'} />
        </>
    );
}