const dynamicAttributes = (attribute, value) => {
    let opts = {};
    if (typeof value !== 'undefined' && value !== null) {
        opts[`${attribute}`] = value;
        return opts;
    }
    return false;
}

export default dynamicAttributes;