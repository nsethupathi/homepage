import {FunctionComponent} from "react";
import {PianoVideo} from "./PianoVideo";

export const PianoPage: FunctionComponent = () => {
    return (
        <>
            <div className={"PianoParent"}>
                <PianoVideo
                    title={"Liebestraume No. 3"}
                    composer={"Franz Liszt"}
                    path={process.env.PUBLIC_URL + '/videos/liebestraume.mp4'}/>
            </div>
            <div className={"PianoParent"}>
                <PianoVideo
                    title={"Etude Op. 25 No. 1"}
                    composer={"Frederic Chopin"}
                    path={process.env.PUBLIC_URL + '/videos/chopin_etude_25_1.mp4'}/>
            </div>
        </>

    )
}