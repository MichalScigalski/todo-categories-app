import { useState } from "react";
import CategoryTile from "../../components/CategoryTile/CategoryTile.component";
import { CategoryListContainer, HeaderSection, CategoryGridContainer } from "./Home.style";
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
                <button onClick={ShowFormHandler}>+</button>
            </HeaderSection>
            { isShowForm && <AddCategory showToggle={ShowFormHandler}/>}
            <CategoryGridContainer>
                {todos.map((category, _key) => <CategoryTile key={_key} category={category} />)}
            </CategoryGridContainer>
        </CategoryListContainer>
    );
}

export default Home;
