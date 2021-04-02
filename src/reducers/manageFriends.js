export function manageFriends(state = {
    friends: []
}, action){
    switch (action.type){
        case "ADD_FRIEND":
            return (
                { ...state,
                    friends: [...state.friends, action.friend]
                }
            )
        case "REMOVE_FRIEND":
            let currentFriend = [...state.friends]
            return({
                    ...state,
                    friends: currentFriend.filter(friend => friend.id !== action.id)
            })
        default:
            return state;
    }
}
