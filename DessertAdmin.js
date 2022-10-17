import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import { createDessert, getAllDesserts, deleteDessert } from '../../APIFunctions/desserts';
import EditDesserts from './EditDesserts';
import { Container, Col, Row, Input, Button } from 'reactstrap';


export default function DessertPage() {
    const [desserts, setDesserts] = useState([]);
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [rating, setRating] = useState();

    async function getDessertsFromDB() {
        const dessertsFromDB = await getAllDesserts();
        if (!dessertsFromDB.error) {
            console.log(dessertsFromDB);
            setDesserts(dessertsFromDB.responseData);
        }
    }
    useEffect(() => {
        getDessertsFromDB();
    }, []);

    return (
        <div>
            <Header title="Welcome to the Dessert Page!" />
            <Container>
                <Row className='container' style={{ padding: '2em' }}>
                    <Col>
                        <Input placeholder='Title'
                            onChange={e => setTitle(e.target.value)} />
                    </Col>
                    <Col>
                        <Input placeholder='Description'
                            onChange={e => setDescription(e.target.value)} />
                    </Col>
                    <Col>
                        <Input placeholder='Rating'
                            onChange={e => setRating(e.target.value)} />
                    </Col>
                    <Col>
                        <Button disabled={!title} onClick={() => createDessert(
                            {
                                title,
                                description,
                                rating
                            }
                        )}
                            style={{ width: '10rem' }}>
                            Submit
                        </Button>
                    </Col>
                </Row>
                {desserts.map((dessert, index) => (
                    <div key={index}>
                        <h1> {dessert.title} </h1>
                        <p> Description: {dessert.description} </p>
                        <p> Rating: {dessert.rating} </p>
                        <EditDesserts dessert = {dessert} />
                        <Button onClick={() => deleteDessert(
                            dessert
                        )}
                            style={{ width: '9rem' }}>
                            Delete
                        </Button>
                    </div>
                ))}
            </Container>
        </div>
    );
}
