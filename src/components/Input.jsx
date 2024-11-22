import React, { forwardRef, useId} from "react";

/*
    const Input = forwardRed( function Input(( { 
    label,
    type="text",
    className="",
    ...props
    }, ref ) 
{
    const id = useId();
    return (
        <div className="">
            { label && <label
            className="inline-block mb-1 pl-1"
            htmlFor={id}></label>
            }
            <input type={type}
            className={`${className}`}
            ref = {ref}
            {...props}
            id={id}
            />
        </div>
    )               
}
*/


export default function Input( { 
    label,
    type="text",
    className="",
    ...props
    }, ref ) 
{
    const id = useId();
    return (
        <div className="">
            { label && <label
            className="inline-block mb-1 pl-1"
            htmlFor={id}></label>
            }
            <input type={type}
            className={`${className}`}
            ref = {ref}
            {...props}
            id={id}
            />
        </div>
    )               
}

export const Input = forwardRef( Input );
