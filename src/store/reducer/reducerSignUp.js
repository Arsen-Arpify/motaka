import {SHOW_PASS, RESHOW_PASS, CHECK_TYPE, CHECK_TYPE_PROV} from "../actions";

const initialState = {
    isPasswordShow: false,
    isRePasswordShow:false,
    isCheckedUser:false,
    isCheckedProv:false,

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
                    return {...state, isCheckedUser: true};
                }
                if (action.payload === true) {
                    return {...state, isCheckedUser: false};
                }
            case CHECK_TYPE_PROV:

                if (action.payload === false) {
                    return {...state, isCheckedProv: true};
                }
                if (action.payload === true) {
                    return {...state, isCheckedProv: false};
                }



            default:
                return state;
        }
    }
;
