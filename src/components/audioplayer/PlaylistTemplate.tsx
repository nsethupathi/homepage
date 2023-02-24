import {FunctionComponent} from "react";
import styles from './../../css/audioplayer/PlaylistTemplate.module.css'

export interface PlaylistTemplateProps {
    children: any;
}

export const PlaylistTemplate: FunctionComponent<PlaylistTemplateProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};