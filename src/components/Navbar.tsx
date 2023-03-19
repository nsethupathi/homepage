import {FunctionComponent} from "react";

export const Navbar: FunctionComponent = () => {
    return <nav className={"nav"}>
            <a href={"/"} className={"site-title"}>Nivethan Sethupathi</a>
            <ul>
                <li className={"active"}>
                    <a href={"/music"}>Music</a>
                </li>
                <li className={"active"}>
                    <a href={"/piano"}>Piano</a>
                </li>
                <li className={"active"}>
                    <a href={"/photography"}>Photography</a>
                </li>
            </ul>
        </nav>
}