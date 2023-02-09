import { Navigate , useParams, Link } from 'react-router-dom';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm.component';
import TodoElement from '../../components/TodoTile/TodoTile.component';
import { ToDoListContainer, TodoHeader, ToDoListGrid, BackIcon } from './Todo.style';
import { useSelector } from 'react-redux';

const Todo = () => {
    let { id } = useParams();
    const todos = useSelector(state => state.todos);
    const currentCategory = todos.find(todo => todo.id.toString() === id);

    return (
        <>
            {currentCategory ?
                <ToDoListContainer>
                    <TodoHeader>
                        <Link to={'/'}><BackIcon /></Link>
                        <h1>{currentCategory.title}</h1>
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
