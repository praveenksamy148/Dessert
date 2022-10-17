import React from 'react'
import { Container, Col, Row, Input, Button } from 'reactstrap';
import { editDessert } from '../../APIFunctions/desserts'
import { useState } from 'react'
function EditDesserts(props) {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState(props.dessert.description);
    const [title, setTitle] = useState(props.dessert.title);
    const [rating, setRating] = useState(props.dessert.rating);
    return (
        <div>
            <Button onClick={() => setShow(!show)}
                style={{ width: '10rem' }}>
                Edit
            </Button>
            {show && (
                <div> <Row className='container' style={{ padding: '2em' }}>
                    <Col>
                        <Input placeholder='Title' defaultValue={title}
                            onChange={e => setTitle(e.target.value)} />
                    </Col>
                    <Col>
                        <Input placeholder='Description' defaultValue={description}
                            onChange={e => setDescription(e.target.value)} />
                    </Col>
                    <Col>
                        <Input placeholder='Rating' defaultValue={rating}
                            onChange={e => setRating(e.target.value)} />
                    </Col>
                    <Button
                        style={{ width: '10rem' }}
                        onClick={() => {
                            editDessert(
                                {
                                    title,
                                    description,
                                    rating,
                                    _id: props.dessert._id
                                }); { setShow(!show) };
                        }
                        }>
                    Submit
                </Button>
                </Row>
                </div>
    )
}
        </div >
    )
}

export default EditDesserts
