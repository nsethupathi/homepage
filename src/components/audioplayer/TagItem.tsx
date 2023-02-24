import {FunctionComponent} from "react";
import styles from '../../css/audioplayer/TagItem.module.css'

export interface TagItemProps {
    status: string;
    onClick: () => void;
    tag: string;
}

export const TagItem: FunctionComponent<TagItemProps> = ({ status, onClick, tag }) => {
    return (
        <div
            className={`${styles.tag} ${status === "active" ? styles.active : ""}`}
            onClick={onClick}
        >
            {tag}
        </div>
    );
};