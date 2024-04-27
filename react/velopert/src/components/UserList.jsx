import React, { useEffect } from 'react';

const UserList = ({users, remove, onToggle}) => {
  useEffect(()=>{
      console.log("유저 값이 설정됨");
      console.log(users);
      return ()=>{
        console.log("user가 바뀌기 전...");
        console.log(users);
      }
  }, [users])
    
    return (
        <ul className='users'>
            {users.map((user, i)=>{
                const {id, username, email, active} = user;
                return <li key={i}>
                    <p>id: {id}</p>
                    <p style={{
                      cursor: "pointer",
                      color: active ? "green" : "red"
                    }} onClick={()=>onToggle(id)}>이름: {username}</p>
                    <p>이메일: {email}</p>
                    <button onClick={()=>remove(id)}>삭제</button>
                </li>
            })}
        </ul>
    );
};

export default UserList;