import React from 'react';
import { CategoryTileContainer } from './CategoryTile.style';
import { useNavigate } from "react-router-dom";


const CategoryTile = ({ category }) => {
    const navigate = useNavigate();

    const NavigateHandler = () => navigate('/todo/'+category.id);

    return (
        <CategoryTileContainer onClick={NavigateHandler}>
            <h1>{category.title}</h1>
            <span>{category.items.length} tasks</span>
        </CategoryTileContainer>
    );
}

export default CategoryTile;
