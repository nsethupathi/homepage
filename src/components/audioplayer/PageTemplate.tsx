import {FunctionComponent} from "react";

export interface PageTemplateProps {
    children: any;
}

export const PageTemplate: FunctionComponent<PageTemplateProps> = ({children}) => {
    return (<div>{children}</div>)
}