import {FunctionComponent} from "react";
import styles from './../../css/audioplayer/Next.module.css'

export interface NextProps {
    src: string;
    onClick: () => void;
}

export const Next: FunctionComponent<NextProps> = ({ src, onClick }) => {
    return <img className={styles.next} src={src} onClick={onClick} />;
};