import Home from './routes/Home/Home.component';
import Todo from './routes/Todo/Todo.component';
import NotFound from './routes/NotFound/NotFound.component';
import { Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}/>
        <Route path='/todo/:id' element={<Todo />}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;