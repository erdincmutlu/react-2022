import React from "react"
import whiskerson from "./images/mr-whiskerson.png"
import phone from "./images/phone-icon.png"
import mail from "./images/mail-icon.png"

export default function Card() {
    return (
        <div className="contact-card">
            <img src={whiskerson} />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phone} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mail} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}