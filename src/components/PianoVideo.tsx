import {FunctionComponent} from "react";
import {Player, Video} from "@vime/react";
import "./../css/PianoVideo.css"

export interface PianoVideoProps {
    title: string,
    composer: string,
    path: string
}

export const PianoVideo: FunctionComponent<PianoVideoProps> = ({title, composer, path}) => {
    return (
        <div className="PianoVideoParent">
            <div className="description">
                <h2>{title}</h2>
                <h3>{composer}</h3>
            </div>
            <div className="video">
                <Player controls>
                    <Video>
                        <source data-src={path} type="video/mp4"/>
                    </Video>
                </Player>
            </div>
        </div>
    )
}