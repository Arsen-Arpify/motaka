import {
    SHOW_PASS,
    RESHOW_PASS,
    CHECK_TYPE,
    CHECK_TYPE_PROV,
    CAPITAL_TYPE,
    CAPITAL_OK,
    VALUE_11,

} from "../actions";

const initialState = {
    isPasswordShow: false,
    isRePasswordShow: false,
    isUser: false,
    isProvider: false,
    isA_ZMax: false,
    isaA_ZMin: false,
    is0_9: false,
    isSpecial: false,
    isArsen:false,





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
            case CAPITAL_TYPE:

                if (action.payload === '400') {
                    return {...state, isArsen: true}
                }
            case CAPITAL_OK:

                if (action.payload === '200') {
                    return {...state, isArsen: false}
                }
            // case VALUE_11:
            //
            //     if (action.payload) {
            //         return {...state, isArsen1: true}
            //     }



            default:
                return state;
        }
    }
;
