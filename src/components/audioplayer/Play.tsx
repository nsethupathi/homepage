import {FunctionComponent} from "react";
import styles from './../../css/audioplayer/Play.module.css'

export interface PlayProps {
    src: string;
    onClick: () => void;
}

export const Play: FunctionComponent<PlayProps> = ({ src, onClick }) => {
    return <img className={styles.play} src={src} onClick={onClick} />;
};