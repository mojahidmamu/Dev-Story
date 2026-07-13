import React from 'react';

const Title = ({ children }) => {
    return (
        <div className="text-3xl font-bold text-center my-2 bg-amber-400">
            {children}
        </div>
    );
};

export default Title;