
// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => ( id !== action.id ));
        case 'EDIT_EXPENSE': 
            console.log('reducer');
            console.log(action.id);
            return state.map((expense) => {
                if (expense.id === action.id) {
                    console.log('found');
                    console.log(expense);
                    return {
                        ...expense, 
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;        
    }
};

// export default expenses