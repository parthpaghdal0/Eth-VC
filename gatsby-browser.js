/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';

const Context = createContext({
});


export const replaceHydrateFunction = () => {
    return (element, container) => {
        const root = ReactDOM.createRoot(container);
        root.render(element);
    };
};

export const wrapRootElement = ({ element, props }) => {
    return <Context.Provider {...props}> {element}</Context.Provider >;
};
*/