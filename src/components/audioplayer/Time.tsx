import {FunctionComponent} from "react";
import styles from '../../css/audioplayer/Time.module.css'

export interface TimeProps {
    time: number;
}

export const Time: FunctionComponent<TimeProps> = ({ time }) => {
    return <h1 className={styles.time}>{time}</h1>;
};