import {FunctionComponent} from "react";
import styles from './../../css/audioplayer/Shuffle.module.css'

export interface ShuffleProps {
    src: string;
    onClick: () => void;
}

export const Shuffle: FunctionComponent<ShuffleProps> = ({ src, onClick }) => {
    return <img className={styles.shuffle} src={src} onClick={onClick} />;
};