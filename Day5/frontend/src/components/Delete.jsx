import axios from 'axios';
import React from 'react'

const Delete = () => {

    const handleDelete = async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        axios.delete(`https://fsd-backend-sem-vi-ds-a.onrender.com/users/${id}`);
        alert("success")
    }
  return (
    <div>
        <form action="" onSubmit={handleDelete}>
            <input type="text" placeholder='Enter product id' name="id"/>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default Delete
