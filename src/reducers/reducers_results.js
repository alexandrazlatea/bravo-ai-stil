export default function (state = '', action) {
    switch(action.type) {
        case 'FETCH_RESULTS':
            return action.payload;
    }
    return state;

}