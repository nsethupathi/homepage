import {FunctionComponent} from "react";
import styles from '../../css/audioplayer/ButtonsAndVolumeBox.module.css'

export interface ButtonsAndVolumeBoxProps {
    children: any;
}

export const ButtonsAndVolumeBox: FunctionComponent<ButtonsAndVolumeBoxProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};