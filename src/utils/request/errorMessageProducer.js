export const getErrorMessage = function(err) {
    return typeof err.response !== "undefined" ? err.response.data.status + " : " + err.response.data.error + " " + err.response.data.path : err.message;
}