export const SHOW_PASS = "SHOW_PASS";
export const RESHOW_PASS = "RESHOW_PASS";
export const CHECK_TYPE = "CHECK_TYPE";
export const CHECK_TYPE_PROV = "CHECK_TYPE_PROV";



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