import { TodoElementContainer, TodoElementBtn } from './TodoElement.style';
import { toggleItem } from '../../actions';
import { useDispatch } from 'react-redux';

const TodoElement = ({ element, categoryId }) => {
    const dispatch = useDispatch();

    const CompleteHandler = () => {
        dispatch(toggleItem(element.id, categoryId));
    };

    return (
        <TodoElementContainer className={element.isCompleted && 'active'}>
            <TodoElementBtn onClick={CompleteHandler} />
            <p>{element.name}</p>
        </TodoElementContainer>
    )
}

export default TodoElement;