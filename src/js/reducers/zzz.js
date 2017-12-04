import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function zzz(state = InitialState.zzz, action) {
    let {type, payload} = action;

    switch(type) {
    case types.ZZZ:
        return [...state, payload] 

    default:
        return state;
    }
};