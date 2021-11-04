import React from 'react';

function textInput({label,refInp,id,name,placeholder,type,onInput}) {
    return (
        <div className="flex flex-col text-left border-b-2 border-gray-200">
            <label htmlFor={id}>{label}</label>
            <input ref={refInp} id={id} name={name} onChange={onInput} placeholder={placeholder} type={type} className="w-full outline-none" />
        </div>
    );
}

export default textInput;