import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_39nqjbr', 'template_c1ktx2m', form.current, 'Wc1s-mOfSDl317jVo')
            .then((result) => {
                console.log(result.text)
                console.log("message sent successfully")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={"container-fluid"}>
            <form ref={form} onSubmit={sendEmail}>
                <h3>Contact Me</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"
                              name="from_name"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    {/* placeholder="" to set default input*/}
                    <input type="email" className="form-control" id="exampleInputEmail1" name="from_email"
                           aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                              name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-info my-2" style={{outlineColor: "var(--main-color)", backgroundColor: "var(--main-color)"}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact