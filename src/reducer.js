const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GOOD':
            let newState = {...state}
            newState.good += 1

            return newState
        case 'OK':
            return state
        case 'BAD':
            return state
        case 'ZERO':
            return state
    }
    return state
}

export default counterReducer