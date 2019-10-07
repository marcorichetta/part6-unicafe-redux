const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GOOD':
            /**
             * Return a new object `{}`
             * copying the data from `state`
             * and the modified part `good: +1`
             *  {
                    good: 1,
                    ok: 0,
                    bad: 0
                }
             */
            return Object.assign({}, {
                ...state,
                good: +1
            })
        case 'OK':
            return Object.assign({}, {
                ...state,
                ok: +1
            })
        case 'BAD':
            return Object.assign({}, {
                ...state,
                bad: +1
            })
        case 'ZERO':
            return initialState
        default:
            return state
    }
}

export default counterReducer