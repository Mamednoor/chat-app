import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Contact(props) {


return (
<div className="Contact">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <div>
        <h4 className="name">{props.name}</h4>
    <div className="status">
        <span className={props.online ? 'status-online' : 'status-offline'}></span>
        <p className="status-text">{props.online ? "Online" : "Offline"}</p>
    </div>
    </div>
</div>
);
}

Contact.proTypes = {
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
online: PropTypes.bool.isRequired,

}


export default Contact;