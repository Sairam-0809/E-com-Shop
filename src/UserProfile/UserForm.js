import React from 'react'
import { Outlet } from 'react-router-dom'

function UserForm() {
    return (
        <section className='userFormContainer'>
            <div className="FormLinkContainer">
            </div>


            <Outlet/>

        </section>
    )
}

export default UserForm
