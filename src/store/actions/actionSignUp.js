export const SHOW_PASS = "SHOW_PASS";
export const RESHOW_PASS = "RESHOW_PASS";
export const CHECK_TYPE = "CHECK_TYPE";
export const CHECK_TYPE_PROV = "CHECK_TYPE_PROV";
export const CAPITAL_TYPE = "CAPITAL_TYPE";
export const CAPITAL_OK = "CAPITAL_OK";
export const VALUE_11 = "VALUE_11";


export const showPass = (payload) => {
    return { type: SHOW_PASS, payload };
};
export const reShowPass = (payload) => {
    return { type: RESHOW_PASS, payload };
};
export const checkType = (payload) => {
    return { type: CHECK_TYPE, payload };
};
export const checkTypeProv = (payload) => {
    return { type: CHECK_TYPE_PROV, payload };
};
export const capitalType = (payload) => {
    return { type: CAPITAL_TYPE, payload };
};
export const capitalOk = (payload) => {
    return { type: CAPITAL_OK, payload };
};
export const value11 = (payload) => {
    return { type: VALUE_11, payload };
};
