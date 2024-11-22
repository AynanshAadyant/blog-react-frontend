import React from "react";

export default function Button( 
    {
        children, 
        type='button', 
        bgColor= 'bg-blue-500',
        textColor= "text-white",
        className= '',
        ...props 
    } ) {
return (
    <button className={`${className} ${textColor} ${bgColor}` } {...props}
    type={type} >
        {children}
    </button>
)

}