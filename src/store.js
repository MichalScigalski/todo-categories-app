import { createStore } from "redux";

import rootReducers from './reducers';

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem("todos", JSON.stringify(state));
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("todos");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(
    rootReducers,
    loadFromLocalStorage(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;