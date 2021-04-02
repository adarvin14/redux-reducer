export function managePresents(state, action){
    let currentNumOfPres = state.numberOfPresents

    switch (action.type) {
        
        case 'INCREASE':
            return {numberOfPresents: currentNumOfPres + 1}
        default:
            return state;
    }
}