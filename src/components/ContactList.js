import React from "react";
import Contact from './Contact'

const users = [

    {
        name: "Minus Bean",
        avatar: "https://i.skyrock.net/2318/19122318/pics/542003866_small.jpg",
    },
    
    {
        name: "Baby Shlague",
        avatar: "https://i.skyrock.net/1085/13431085/pics/345224551.jpg",
    },
    
    {
        name: "Bo'Cal Fish",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSor4mgdlMoNibiYxM5S3hbEiagOi3zD3kmoTUjiC3gLUihknCK&usqp=CAU",
    },
    
    {
        name: "Kitty Kat",
        avatar: "https://www.catizz.com/medias/common/chat-grosse-tete-mini.jpg",
    },
    
    {
        name: "Damn Daniels",
        avatar: "https://www.chakipet.com/wp-content/uploads/animaux-drole-tete-6-569x640.jpg",
    }
    ]

const ContactList = () => (
    <div> 
        {users.map(user => (<Contact name={user.name} avatar={user.avatar} online={user.online}/>))}
    </div>
)

    // users.map(user => {return <p>{user.name}</p>} )


export default ContactList;