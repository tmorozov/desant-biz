import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const ArticleLink = ({data}) => <Link to={data.path}>{data.title}</Link>

const Articles = ({articles}) => {
    return articles.map(article => <ArticleLink key={article.id} data={article}/>)
}

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ArticlesLinks = ({articles}) => {
    return (
        <ArticlesContainer>
            <Articles articles={articles} />
        </ArticlesContainer>
    );
}