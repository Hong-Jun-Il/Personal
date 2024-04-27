import "./App.css";
import React, { useRef, useState } from 'react';
import UserList from "../../velopert/src/components/UserList";
import CreateUser from "../../velopert/src/components/CreateUser";
import Counter from "../../velopert/src/components/Counter";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ])

  const nextId = useRef(4);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  })

  const { username, email } = inputs;

  function onChange(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function onCreate() {
    if (username === "" || email === "") {
      alert("입력해라");
      return;
    }

    setUsers([
      ...users,
      {
        id: nextId.current,
        username: username,
        email: email,
        active: false
      }
    ])
    setInputs({
      username: "",
      email: ""
    })
    nextId.current += 1;
  }

  function remove(id) {
    setUsers(users.filter(e => e.id !== id));
  }

  function onToggle(id){
    setUsers(users.map(user=>{
      return user.id === id ? {...user, active: !user.active} : user;
    }))
  }
  const [visible, setVisible] = useState(false);
  function showAndHideCounter(){
    setVisible(!visible);
  }

  return (
    <div className="test">
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} remove={remove} onToggle = {onToggle} />
      <Counter showAndHideCounter = {showAndHideCounter} style={{ display: visible ? 'flex' : 'none' }} />

      <button onClick={showAndHideCounter}>클릭</button>
    </div>
  );
};

export default App;
