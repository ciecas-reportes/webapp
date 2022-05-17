import React from 'react';

const ProgressBarInfinite = (props) => {
    let loading = (props.loading !== "undefined") ? props.loading : false;
    return (
        <progress className={`progress is-small is-primary ${loading ? "": "is-hidden"}`} max="100"></progress>
    );
};
export default ProgressBarInfinite;