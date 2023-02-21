import { useState } from "react";
import CategoryTile from "../../components/CategoryTile/CategoryTile.component";
import { CategoryListContainer, HeaderSection, CategoryGridContainer, CategoryInfoContainer } from "./Home.style";
import AddCategory from "../../components/AddCategoryForm/AddCategoryForm.component";
import { useSelector } from "react-redux";

const Home = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    const todos = useSelector(state => state.todos);

    const ShowFormHandler = () => setIsShowForm(!isShowForm);
    return (
        <CategoryListContainer>
            <HeaderSection>
                <h1>Twoje listy</h1>
                <button onClick={ShowFormHandler} className={todos.length === 0 && 'breathing'}/>
            </HeaderSection>
            {isShowForm && <AddCategory showToggle={ShowFormHandler} />}
            {todos.length > 0 ?
                <CategoryGridContainer>
                    {todos.map((category, _key) => <CategoryTile key={_key} category={category} />)}
                </CategoryGridContainer> :
                <CategoryInfoContainer>
                    <p>You nie masz żadnych list, <br /> stwórz nową klikając powyższy przycisk.</p>
                </CategoryInfoContainer>
            }
        </CategoryListContainer>
    );
}

export default Home;