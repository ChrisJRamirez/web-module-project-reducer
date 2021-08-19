export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const M_PLUS = "M_PLUS";
export const M_R = "M_R";
export const M_C = "M_C";

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    // console.log(number)
    return ({ type: APPLY_NUMBER, payload: number });
}

export const applyOperation = (operator) => {
    return ({type: CHANGE_OPERATION, payload: operator});
}

export const applyClear = (clear) => {
    return ({type: CLEAR_DISPLAY, payload: clear});
}

export const memPlus = (totalValue) => {
    return ({type: M_PLUS, payload: totalValue});
}

export const memR = (currentMem) => {
    return ({type: M_R, payload: currentMem});
}

export const memC = (zeroMem) => {
    return ({type: M_C, payload: zeroMem})
}