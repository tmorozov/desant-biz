import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {groupBy} from "lodash";

import sectionsJson from "../../content/jos_sections.json";
import categoriesJson from "../../content/jos_categories.json";

const sections = sectionsJson[2].data.filter(sec => sec.access === "0");;
sections.sort((a,b) => a.ordering - b.ordering);

const categories = categoriesJson[2].data.filter(cat => cat.access === "0");
const categoriesBySection = groupBy(categories, 'section');

const tree = sections.map(section => {
    return {
        id: section.id,
        name: section.title,
        path: `/${section.alias}`,
        children: categoriesBySection[section.id].map(category => ({
            id: category.id,
            name: category.title,
            path: `/${section.alias}/${category.alias}`
        }))
    }
});

const MenuItem = styled.li`
    font-size: 14px;
    display: block;
    list-style: none;
    text-decoration: none;
    margin-left: -30px;
    text-align: left;
    padding: 3px 0px 3px 15px;
    a {
        display: block;
    }
`;

const MenuName = styled.h3`
    text-align: right;
    padding: 3px 0 3px 0;
    font-size: 16px;
`;

const MenuItems = ({items, expandNodes=[]}) => {
    return items.map(item => (
    <MenuItem key={item.id}>
        <Link to={item.path} 
            activeStyle={{color: 'gray'}} 
            partiallyActive={true}>{item.name}</Link>
        {expandNodes.includes(item) && <ul><MenuItems items={item.children}/></ul>}
    </MenuItem>
    ))
};

export const Menu = ({location}) => {
    const expandNodes = tree.filter(sec => location.pathname.startsWith(sec.path))
    return (
        <nav>
            <MenuName>Главное Меню</MenuName>
            <ul>
                <MenuItem><Link to="/">Главная</Link></MenuItem>
                <MenuItems items={tree} expandNodes={expandNodes} />
            </ul>
        </nav>
    );
}