import styles from './../../css/audioplayer/PlaylistItem.module.css'
import {FunctionComponent} from "react";

export interface PlaylistItemProps {
    status: string;
    data_key: string;
    src: string;
    title: string;
    onClick: () => void;
}

export const PlaylistItem: FunctionComponent<PlaylistItemProps> = ({ status, data_key, src, title, onClick }) => {
    return (
        <p
            className={`${styles.item} ${status === "active" ? styles.active : ""}`}
            data-key={data_key}
            src={src}
            title={title}
            onClick={onClick}
        >
            {title}
        </p>
    );
};