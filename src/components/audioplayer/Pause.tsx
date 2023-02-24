import styles from "./../../css/audioplayer/Pause.module.css";
import {FunctionComponent} from "react";

export interface PauseProps {
    src: string;
    onClick: () => void;
}

export const Pause: FunctionComponent<PauseProps> = ({ src, onClick }) => {
    return <img className={styles.pause} src={src} onClick={onClick} />;
};