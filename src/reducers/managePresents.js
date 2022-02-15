

export function managePresents(state = {numberOfPresents: 0}, action){
    state ={
        numberOfPresents: 0

    }

    switch(action.type){
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1};
            default:
                return state

    }

}
