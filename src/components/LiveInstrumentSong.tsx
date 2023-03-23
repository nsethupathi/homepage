import {FunctionComponent} from "react";
import {Audio, Player} from "@vime/react";

export interface LiveInstrumentSongProps {
    title: string,
    path: string
}

export const LiveInstrumentSong: FunctionComponent<LiveInstrumentSongProps> = ({title, path}: LiveInstrumentSongProps) => {
    return (
        <div>
            <h4>{title}</h4>
            <Player controls>
                <Audio>
                    <source data-src={path} type={"audio/mp3"}/>
                </Audio>
            </Player>
            <br></br>
        </div>
    );
}