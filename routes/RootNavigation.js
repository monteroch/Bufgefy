import React from 'react';

export const navigatorRef = React.createRef();

export function navigate(name, params){
    navigatorRef.current?.navigate(name, params);
};