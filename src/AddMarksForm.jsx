import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddMarksForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        event.preventDefault()
        setValidated(true);
    };

    return (
        <div className='flex justify-center' >
            <div className='w-[300px] bg-gray-100 p-4 rounded-xl' >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='flex justify-center mb-4'>
                        <Row><p className='text-4xl font-semibold' >Subject form</p></Row>
                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="marks"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className='flex justify-center' >
                        <Button type="submit">Submit form</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default AddMarksForm;