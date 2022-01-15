
export default (state, action) => {
    const options = {
        "default": ()=>{ return state }
    };
    (options[action.type] || options["default"]);
}