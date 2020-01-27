import React from "react";
import { ArticlesLinks } from "./articles-links";

export const MoreArticles = ({articles}) => {
    return ( articles.length ?
        <div>
            <h3>Еще статьи...</h3>
            <ArticlesLinks articles={articles}/>
        </div> : null
    );
}