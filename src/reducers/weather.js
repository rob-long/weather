import { FETCH_WEATHER } from '../actions'

export default function weather(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            //console.log(action.payload);
            if (action.payload.data) {
                //console.log('new', [ ...state, action.payload.data ]);
                return [ ...state, action.payload.data ];
            }
            return state;
        default:
            return state;
    }
    return state;
}
