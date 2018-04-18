import * as actionType from '../actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case actionType.ADDED:
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionType.DELETED:
            const updatedPersons = state.persons.filter(person => person.id !== action.personId)
            return {
                persons: updatedPersons
                // persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state;           
    }
};

export default reducer;