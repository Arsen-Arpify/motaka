import {SHOW_PASS, RESHOW_PASS, CHECK_TYPE, CHECK_TYPE_PROV} from "../actions";

const initialState = {
    isPasswordShow: false,
    isRePasswordShow:false,
    isUser:false,
    isProvider:false,
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

            case CHECK_TYPE:

                if (action.payload === false) {
                    return {...state, isUser: true};
                }
                if (action.payload === true) {
                    return {...state, isUser: false};
                }
            case CHECK_TYPE_PROV:

                if (action.payload === false) {
                    return {...state, isProvider: true};
                }
                if (action.payload === true) {
                    return {...state, isProvider: false};
                }



            default:
                return state;
        }
    }
;
