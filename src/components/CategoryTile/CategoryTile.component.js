import React from 'react';
import { CategoryTileContainer, CategoryTileHeader, CategoryTileRemove } from './CategoryTile.style';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeCategory } from '../../actions';
import { useConfirm } from 'material-ui-confirm';

const CategoryTile = ({ category }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const confirm = useConfirm();
    const NavigateHandler = () => navigate('/todo/' + category.id);

    const deleteCategoryHandler = e => {
        e.stopPropagation();
        confirm({ title: '', description: `Are you sure you want to remove list: ${category.title}` })
            .then(() => {
                dispatch(removeCategory(category.id));
            })
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
