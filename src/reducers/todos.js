// import TODOS from '../todos.json';

const INIT_VALUE = [];

const todosReducer = (state = INIT_VALUE, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            const newCategory = {
                id: Date.now(),
                title: action.title,
                items: []
            }
            return [newCategory, ...state];
        case 'ADD_ITEM':
            const newItem = {
                id: Date.now(),
                name: action.name,
                isCompleted: false
            }
            const temp = [...state];
            temp.find(category => category.id === action.category_id).items.push(newItem);
            return temp;
        case 'TOGGLE_ITEM':
            const itemRef = state.find(category => category.id === action.category_id)
                .items.find(item => item.id === action.id);
            itemRef.isCompleted = !itemRef.isCompleted;
            return [...state];
        case 'REMOVE_CATEGORY':
            return state.filter(category => category.id !== action.id);
        default:
            return state;
    }
}

export default todosReducer