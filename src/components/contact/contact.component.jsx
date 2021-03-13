import React from 'react'
import './contact.component.css';
import emailjs from 'emailjs-com';

function Contact() {

    const onSendMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_3df8z4a', 'template_9ruisyr', e.target, 'user_pj9KSpeMaBfhp5gPYcqwk')
        .then((result) => {
            console.log(result.text);
            alert('Your message has been sent!')
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


    return (
        <section id="contact">
            <div class="row">
                <div className="col-md-6 contact-title">
                    <h1 className="text-center font-weight-bold">Contact Us</h1>
                </div>
            <div className="col-md-6 m-auto" >
                <div className="card card-body">
                    {/* <h2 className="font-weight-bold">Get In Touch </h2> */}
                    <form onSubmit={onSendMail} className="form">
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject ..." className="form-control rounded"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name ..." className="form-control rounded"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="example@gmail.com" className="form-control rounded"/>
                        </div>
                        <div className="form-group">
                            <textarea name="messge" className="form-control" placeholder="Tape your message here please ..." id="" cols="30" rows="10">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary rounded">send</button>
                       
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact
