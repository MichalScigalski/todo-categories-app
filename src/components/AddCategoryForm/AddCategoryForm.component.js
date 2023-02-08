import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCategoryContainer } from './AddCategoryForm.style';
import { addCategory } from '../../actions';

const AddCategory = ({ showToggle}) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const titleHandler = e => {
        setTitle(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        if(title.length>30) {
            setTitle('');
            return alert('Name of list is too long!');
        }
        dispatch(addCategory(title));
        showToggle();
    }

    return (
        <AddCategoryContainer>
            <form onSubmit={submitHandler}>
                <label>List name</label>
                <input required type="text" value={title} onChange={titleHandler} placeholder="Shopping" />
                <button type="submit">Create</button>
            </form>
        </AddCategoryContainer>
    )
}

export default AddCategory;