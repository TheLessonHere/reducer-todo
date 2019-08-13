

export const initialState = {
    todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    },
    {
    item: 'Organize Garage',
    completed: false,
    id: 1528817077286
    }]
};

export const todoReducer = (state, action) => {
    switch(action.type) {
    case 'ADD_ITEM':
        const newItem = {
            item: action.payload,
            id: Date.now(),
            purchased: false
            };
        return {
            ...state,
            todos: [...state.todos, newItem]
        };
    case 'FILTER_LIST':
        return {
            ...state,
            todos: state.todos.filter(item => {
                return !item.completed;
            })
        };
    case 'TOGGLE_ITEM':
        return {
            ...state,
            todos: state.todos.map(item => {
                if (action.payload === item.id) {
                  return {...item, completed: !item.completed};
                } else {
                  return item;
                }
              })
        }
    default:
        return state;
    }
}