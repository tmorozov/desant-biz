import React from "react";
import { Link } from "gatsby";
import {HtmlContentWrapper} from "./html-content-wrapper";

export const Preview = ({title, introtext, path, fulltext}) => (
    <div>
        <h3>{title}</h3>
        <HtmlContentWrapper dangerouslySetInnerHTML={{__html: introtext}} />
        { fulltext && path && <Link to={path}>Читать дальше...</Link> }
    </div>
);
