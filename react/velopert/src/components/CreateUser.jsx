import React from 'react';

const CreateUser = ({username, email, onChange, onCreate}) => {
    return (
        <div>
            <input type="text" name="username" value={username} onChange={onChange} />
            <input type="text" name="email" value={email} onChange={onChange} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default CreateUser;