import {FunctionComponent} from "react";
import styles from './../../css/audioplayer/Previous.module.css'

export interface PreviousProps {
    src: string;
    onClick: () => void;
}

export const Previous: FunctionComponent<PreviousProps> = ({ src, onClick }) => {
    return <img className={styles.previous} src={src} onClick={onClick} />;
};