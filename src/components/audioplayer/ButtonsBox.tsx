import styles from "./ButtonsBox.module.css";
import {FunctionComponent} from "react";

export interface ButtonsBoxProps {
    children: any;
}

export const ButtonsBox:FunctionComponent<ButtonsBoxProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};