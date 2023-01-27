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
