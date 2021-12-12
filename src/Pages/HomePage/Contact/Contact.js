import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sjvqnwu', 'template_t98vt1r', form.current, 'user_eDqV5M5EZu0SaUJHSPmUo')
            .then((result) => {
                alert('Message Sent Successfully');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };

    return (
        <div className="contact-bg">
            <div>
                <Container>
                    <h2 className='fw-bold'>CONTACT ME !</h2>
                    <Row>
                        <Col md={6}>
                            <img
                                className="img-fluid my-5"
                                src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
                                alt=""
                            />
                        </Col>
                        <Col md={6} className='my-5'>
                            <form ref={form} onSubmit={sendEmail}>
                                <input name='client_name' type="text" placeholder='Your name' /><br />
                                <input name='client_email' type="email" placeholder='Your email' /><br />
                                <textarea name="client_message" id="" cols="30" rows="10"></textarea><br />
                                <Button className='bg-warning fw-bold text-black px-5 py-2'>SEND</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;



