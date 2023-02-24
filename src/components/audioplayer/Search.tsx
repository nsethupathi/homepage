import styles from '../../css/audioplayer/Search.module.css'
import {FunctionComponent} from "react";

export interface SearchProps {
    onChange: () => void;
    value: string;
    placeholder: string;
}

export const Search: FunctionComponent<SearchProps> = ({ onChange, value, placeholder }) => {
    return (
        <input
            type="text"
            className={styles.search}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
};
