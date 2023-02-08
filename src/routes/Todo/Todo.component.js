import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AddTodoElement from '../../components/AddTodoElement/AddTodoElement.component';
import TodoElement from '../../components/TodoElement/TodoElement.component';
import { ToDoListContainer, TodoHeader, ToDoListGrid } from './Todo.style';
import { useDispatch, useSelector } from 'react-redux';
import { removeCategory } from '../../actions';

const Todo = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentCategory = todos.find(todo => todo.id.toString() === id);

    const deleteCategoryHandler = () => {
        dispatch(removeCategory(currentCategory.id));
        navigate('/');
    }

    return (
        <>
            {currentCategory ?
                <ToDoListContainer>
                    <TodoHeader>
                        <h1>{currentCategory.title}</h1>
                        <button onClick={deleteCategoryHandler} />
                    </TodoHeader >
                    <AddTodoElement categoryId={currentCategory.id} />
                    <ToDoListGrid>
                        {currentCategory.items.map((item, _key) =>
                            <TodoElement
                                key={_key}
                                categoryId={currentCategory.id}
                                element={item} />
                        )}
                    </ToDoListGrid>
                </ToDoListContainer> :
                <Navigate to='/' />
        }
        </>

    );
}

export default Todo;
