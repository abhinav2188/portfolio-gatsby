import React from 'react';

const Container = (props) => {
    return (
        <div className={`lg:w-4/5 md:w-5/6 w-11/12 mx-auto ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Container;