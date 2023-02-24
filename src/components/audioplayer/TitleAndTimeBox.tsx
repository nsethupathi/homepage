import styles from '../../css/audioplayer/TitleAndTimeBox.module.css'
import {FunctionComponent} from "react";

export interface TitleAndTimeBoxProps {
    children: any;
}

export const TitleAndTimeBox: FunctionComponent<TitleAndTimeBoxProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};