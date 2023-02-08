import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm.component';
import TodoElement from '../../components/TodoTile/TodoTile.component';
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
            if(window.confirm(`You want to remove category: ${currentCategory.title}?`)) {
                dispatch(removeCategory(currentCategory.id));
                navigate('/');
            }
    }

    return (
        <>
            {currentCategory ?
                <ToDoListContainer>
                    <TodoHeader>
                        <Link to={'/'}>{currentCategory.title}</Link>
                        {/* <h1>{currentCategory.title}</h1> */}
                        <button onClick={deleteCategoryHandler} />
                    </TodoHeader >
                    <AddTodoForm categoryId={currentCategory.id} />
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
