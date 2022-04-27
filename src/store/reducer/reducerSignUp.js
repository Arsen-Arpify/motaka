import {SHOW_PASS, RESHOW_PASS} from "../actions";

const initialState = {
    isPasswordShow: false,
    isRePasswordShow:false,
};

export const ReducerSignUp = (state = initialState, action) => {


        switch (action.type) {
            case SHOW_PASS:

                if (action.payload === false) {
                    return {...state, isPasswordShow: true};
                }
                if (action.payload === true) {
                    return {...state, isPasswordShow: false};
                }
            case RESHOW_PASS:

                if (action.payload === false) {
                    return {...state, isRePasswordShow: true};
                }
                if (action.payload === true) {
                    return {...state, isRePasswordShow: false};
                }

            default:
                return state;
        }
    }
;
