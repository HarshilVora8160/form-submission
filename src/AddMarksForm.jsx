import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AllSubjectMarksForm from './AllSubjectMarksForm';

function AddMarksForm() {

    const [subjectArray, setSubjectArray] = useState([])
    console.log("subjectArray--------------",subjectArray);

    // =============================================================================================

    const subjects = ["Math", "English", "Hindi", "Gujarati", "History"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [subject, setSubject] = useState(subjects[0]);

    const [subjectMarks, setSubjectMarks] = useState({
        subject,
        marks: ""
    });
    console.log("subjectMarks-----------------",subjectMarks);
    

    const handleChange = (event) => {
        setSubjectMarks({
            ...subjectMarks, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentIndex < subjects.length) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setSubject(subjects[nextIndex]);
            setSubjectMarks({ subject: subjects[nextIndex], marks: "" })
            setSubjectArray([...subjectArray, subjectMarks])
        } else {
            console.log("result completed!");
        }
    };

    return (
        <>
            {
                subjectArray?.length < 5 &&
                <div className='flex justify-center' >
                    <div className='w-[400px] bg-gray-100 p-4 rounded-xl' >
                        <Form noValidate onSubmit={handleSubmit}>
                            <div className='flex justify-center mb-1'>
                                <Row><p className='text-4xl font-semibold' >Result form</p></Row>
                            </div>
                            <Row className="mb-3">
                                <Form.Group as={Col} className='mb-2 flex justify-end' md="12" controlId="validationCustom01">
                                    <Form.Label>Total Marks : 80</Form.Label>
                                </Form.Group>
                                <Form.Group as={Col} className='mb-3' md="12" controlId="validationCustom01">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        name='subject'
                                        value={subject}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Marks</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Enter marks..."
                                        name='marks'
                                        value={subjectMarks.marks}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <div className='flex justify-center' >
                                <Button type="submit">Submit form</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            }
            <AllSubjectMarksForm setSubjectArray={setSubjectArray} subjectArray={subjectArray} subjectMarks={subjectMarks} setSubjectMarks={setSubjectMarks} />
        </>
    );
}

export default AddMarksForm;