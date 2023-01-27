import React, {useState} from 'react'
import useInput from './hooks/useInput';
export default function UserForm() {
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindlastName, resetLastName] = useInput("");
    function handleSubmit(e) {
       e.preventDefault()
       alert(`hello ${firstName} ${lastName}`)
       const data = {firstName, lastName};
       localStorage.setItem("data", JSON.stringify(data))
       JSON.parse(localStorage.getItem("data"))
       sessionStorage.setItem("data", JSON.stringify(data))
       JSON.parse(sessionStorage.getItem("data"))
       //document.cookie = "hello=true";
// document.cookie = "hello=true
// expires=Fri, 31 Jan 2023 11:11:11 GMT";
       resetFirstName()
       resetLastName()
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input
            {...bindFirstName}
            type= "text"/>
            </div>
            <div>
            <label>Last Name</label>
            <input
           {...bindlastName}
            type= "text"/>
            </div>
            <button>Submit</button>
            </form></>
  )
}
