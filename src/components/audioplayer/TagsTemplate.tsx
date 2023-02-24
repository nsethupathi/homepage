import styles from "../../css/audioplayer/TagsTemplate.module.css";
import {FunctionComponent} from "react";

export interface TagsTemplateProps {
    children: any;
}

export const TagsTemplate: FunctionComponent<TagsTemplateProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
