import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AllSubjectMarksForm = ({ setSubjectArray, subjectArray, subjectMarks, setSubjectMarks, setErrorsArray, errorsArray }) => {

  const handleChange = (e, ind) => {

    const addMarks = subjectArray?.map((ele, idx) => {
      if (idx === ind) {
        return { ...ele, marks: e.target.value }
      }
      return ele
    })
    setSubjectArray(addMarks)

    const clearErrorArr = errorsArray?.map((ele, idx) => {
      if (idx === ind) {
        return { marks: "" }
      }
      return ele
    })
    setErrorsArray(clearErrorArr)
  }


  const allInOneSubmitFormHandler = () => {
    let errorsArr = [];
    for (let i = 0; i < subjectArray.length; i++) {
      let obj = {}
      if (!subjectArray[i]['marks']) {
        obj.marks = "please enter you marks"
      } else {
        obj.marks = ""
      }
      errorsArr.push(obj)
    }
    setErrorsArray(errorsArr)
  }
  console.log("subjectArray==", subjectArray)
  console.log("errorsArray==", errorsArray)

  return (
    <>
      <div className='p-4 rounded-xl grid grid-cols-12 gap-5' >
        {
          subjectArray?.length > 0 ? subjectArray?.map((ele, idx) => {
            return (
              <div className='col-span-3 flex p-3 bg-gray-50 rounded-xl' >
                <Form noValidate onSubmit={"handleSubmit"}>
                  <div className='flex justify-center mb-1'>
                    <Row><p className='text-4xl font-semibold' >Subject form</p></Row>
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
                        value={ele.subject}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                      <Form.Label>Marks</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Enter marks..."
                        name='marks'
                        value={ele.marks ? ele.marks : "subjectMarksData?.marks"}
                        onChange={(e) => handleChange(e, idx)}
                      />
                    </Form.Group>
                    {errorsArray?.length && <p className='text-red-500'>{errorsArray?.length === subjectArray.length && errorsArray[idx]['marks']}</p>}
                  </Row>
                  <div className='flex justify-center' >
                    <Button>Submit form</Button>
                  </div>
                </Form>
              </div>
            )
          })
            : ""
        }
      </div>
      <div className='flex justify-center' >
        <Button type="submit" onClick={allInOneSubmitFormHandler} >All in one Submit form</Button>
      </div>
    </>
  )
}

export default AllSubjectMarksForm
