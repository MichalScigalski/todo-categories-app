export const addCategory = title => {
    return(
        {
            type: 'ADD_CATEGORY',
            title
        }
    )
};

export const addItem = (name, category_id ) => {
    return (
        {
            type: 'ADD_ITEM',
            name,
            category_id
        }
    )
}

export const toggleItem = (id, category_id) => {
    return (
        {
            type: 'TOGGLE_ITEM',
            id,
            category_id
        }
    )
}

export const removeCategory = id => {
    return (
        {
            type: 'REMOVE_CATEGORY',
            id
        }
    )
}