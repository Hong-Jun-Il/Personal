import React, { useState, useRef } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs;
    const refTest = useRef();
    const onChange = (e)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    };

    const onReset = () =>{
        setInputs({
            name: '',
            nickname: ''
        })
        refTest.current.focus();
    };

    return (
        <>
            <input onChange={onChange} ref={refTest} name='name' placeholder='이름' type="text" value={name} />
            <input onChange={onChange} name='nickname' placeholder='닉네임' type="text" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <p>이름: {name}</p>
                <p>닉네임: {nickname}</p>
            </div>
        </>
    );
};

export default InputSample;