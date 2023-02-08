import { useState } from 'react';
import { AddTodoContainer } from './AddTodoElement.style';
import { addItem } from '../../actions';
import { useDispatch } from 'react-redux';

const AddTodoElement = ({ categoryId }) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const nameHandler = e => {
        setName(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        dispatch(addItem(name, categoryId));
        setName('');
    }

    return (
        <AddTodoContainer>
            <form onSubmit={submitHandler}>
                <input type="text" value={name} onChange={nameHandler} placeholder="Buy something..." />
                <button type="submit">Add</button>
            </form>
        </AddTodoContainer>
    )
}

export default AddTodoElement;