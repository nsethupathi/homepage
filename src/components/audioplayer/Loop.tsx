import styles from "./../../css/audioplayer/Loop.module.css";
import {FunctionComponent} from "react";

export interface LoopProps {
    src: string;
    onClick: () => void;
}

export const Loop: FunctionComponent<LoopProps> = ({ src, onClick }) => {
    return <img className={styles.loop} src={src} onClick={onClick} />;
};
