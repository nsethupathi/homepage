import {FunctionComponent} from "react";
import styles from '../../css/audioplayer/Title.module.css'


export interface TitleProps {
    title: string;
}

export const Title: FunctionComponent<TitleProps> = ({ title }) => {
    return <h1 className={styles.title}>{title}</h1>;
};