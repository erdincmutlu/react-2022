import React from "react"
import mr_whiskerson from "./images/mr-whiskerson.png"
import phone from "./images/phone-icon.png"
import mail from "./images/mail-icon.png"
import {} from "./images/felix.png"
import {} from "./images/fluffykins.png"
import {} from "./images/pumpkin.png"

export default function Contact(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}