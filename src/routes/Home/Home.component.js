import { useState } from "react";
import CategoryTile from "../../components/CategoryTile/CategoryTile.component";
import { CategoryListContainer, HeaderSection, CategoryGridContainer, CategoryInfoContainer } from "./Home.style";
import AddCategory from "../../components/AddCategory/AddCategory.component";
import { useSelector } from "react-redux";


const Home = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    const todos = useSelector(state => state.todos);

    const ShowFormHandler = () => setIsShowForm(!isShowForm);
    return (
        <CategoryListContainer>
            <HeaderSection>
                <h1>Your lists</h1>
                <button onClick={ShowFormHandler} className={todos.length === 0 && 'breathing'}/>
            </HeaderSection>
            {isShowForm && <AddCategory showToggle={ShowFormHandler} />}
            {todos.length > 0 ?
                <CategoryGridContainer>
                    {todos.map((category, _key) => <CategoryTile key={_key} category={category} />)}
                </CategoryGridContainer> :
                <CategoryInfoContainer>
                    <p>You don't have any todo-lists, <br /> create a new one by clicking on blue button above.</p>
                </CategoryInfoContainer>
            }
        </CategoryListContainer>
    );
}

export default Home;
