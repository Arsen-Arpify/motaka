export const SHOW_PASS = "SHOW_PASS";
export const RESHOW_PASS = "RESHOW_PASS";

export const showPass = (payload) => {
    return { type: SHOW_PASS, payload };
};
export const reShowPass = (payload) => {
    return { type: RESHOW_PASS, payload };
};