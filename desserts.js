import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import { getAllDesserts } from '../../APIFunctions/desserts';
import { Container } from 'reactstrap';

export default function DessertPage()
{
    const [desserts, setDesserts] = useState([]);
    async function getDessertsFromDB() {
        const dessertFromDB = await getAllDesserts();
        if(!dessertFromDB.error)
        {
            setDesserts(dessertFromDB.responseData);
        }
    }
    useEffect(() => {
        getDessertsFromDB();
    }, []);

    return(
        <div> 
            <Header title = "Welcome to the Dessert Page!" /> 
            <Container> 
                {desserts.map((dessert, index ) => (
                    <div key = {index}>
                        <h1> {dessert.name} </h1>
                        <p> description: {dessert.description} </p>
                        <p> rating: {dessert.rating} </p>
                    </div>
                ))}
            </Container>
        </div>
    );
}
