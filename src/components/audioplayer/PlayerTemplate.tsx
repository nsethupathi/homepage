import {FunctionComponent} from "react";
import styles from '../../css/audioplayer/PlayerTemplate.module.css'

export interface PlayerTemplateProps {
    children: any;
}

export const PlayerTemplate: FunctionComponent<PlayerTemplateProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};