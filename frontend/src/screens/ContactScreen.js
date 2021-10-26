import { Button, Form } from "react-bootstrap"
import "./styles/contact.css"
import emailjs from 'emailjs-com';

export default function ContactScreen() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_kcqci79', 'template_2wjt6up', e.target, 'user_16OuB6j1zp2w7ocAR6OWs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <div className="contact">
            <div className="contactContent">
                <div className="contactHeader">İLETİŞİM</div>
                <div className="contactbar"></div>
                <div className="formStage">
                    <Form className="form" onSubmit={sendEmail}>
                        <Form.Group className="nameClass" controlId="nameControl">
                            <Form.Label>Ad Soyad*</Form.Label>
                            <Form.Control type="text" name="name"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="emailClass" controlId="emailControl">
                            <Form.Label>E-Mail*</Form.Label>
                            <Form.Control type="text" name="email"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="subjectClass" controlId="nameControl">
                            <Form.Label>Konu*</Form.Label>
                            <Form.Control type="text" name="subject"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="messageClass" controlId="messageControl">
                            <Form.Label>Mesaj*</Form.Label>
                            <Form.Control as="textarea" rows={3}  name="message" className="textareaClass"/>
                        </Form.Group>
                        <br/>
                        <Button type="submit" className="button">Gönder</Button>
                    </Form>
                    </div>
            </div>
        </div>
    )
}
