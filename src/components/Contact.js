import React from 'react';
import './style.css';

const user = {
    name: 'Lori Scott',
    status: true,
    image: 'https://randomuser.me/api/portraits/women/10.jpg'
};


function Contact () {

    const status = user.status ? 'status-online' : 'status-offline'

    return (
    <div className = "Contact">
        <img className ="avatar" src={user.image} alt="avatar"/>
        <div className ="status">
            <h4 className ="name">{user.name}</h4>

            <div className={status}>
                <p className="status-text">{user.status ? 'online' : 'offline'}</p>
            </div>
        </div>
    </div>

);
}

export default Contact;