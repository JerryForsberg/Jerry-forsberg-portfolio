import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (e.currentTarget.checkValidity() === true) {
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setValidated(false);
          setError('');
        })
        .catch((err) => {
          console.error('Email failed:', err);
          setError('Something went wrong. Please try again later.');
        });
    }
  };

  return (
    <Row className="justify-content-md-center my-5 animate-fade-in">
      <Col md={6}>
        <h2>Contact</h2>
        {submitted && <Alert variant="success">Your message has been sent successfully!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className='my-2'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formMessage" className='my-2'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className='my-2'>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;