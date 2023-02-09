import React from 'react';
import { CategoryTileContainer, CategoryTileHeader, CategoryTileRemove } from './CategoryTile.style';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeCategory } from '../../actions';

const CategoryTile = ({ category }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const NavigateHandler = () => navigate('/todo/'+category.id);

    const deleteCategoryHandler = e => {
        e.stopPropagation();
        if(window.confirm(`You want to remove category: ${category.title}?`)) {
            dispatch(removeCategory(category.id));
            navigate('/');
        }
    }

    return (
        <CategoryTileContainer onClick={NavigateHandler}>
            <CategoryTileHeader >
                <h1>{category.title}</h1>
                <span>{category.items.length} tasks</span>
            </CategoryTileHeader>
            <CategoryTileRemove onClick={deleteCategoryHandler} />
        </CategoryTileContainer>
    );
}

export default CategoryTile;
