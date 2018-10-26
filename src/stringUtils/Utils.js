
export const isBlank = (str) => {

    if (str == null || str.length === 0) {
        return true;
    }
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === ' ') == false) {
            return false;
        }
    }
    return true;
}

export const isNumeric = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            return false;
        }
    }
    return !isNaN(parseFloat(str)) && isFinite(str);
}