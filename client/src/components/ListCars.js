import React, {Fragment, useEffect, useState} from "react";

const ListCars = () => {

    const [cars, setCars] = useState([]);

    const getCars = async () => {
        try {
            const response = await fetch("http://localhost:5000/cars");
            const jsonData = await response.json();

            setCars(jsonData.cars);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(() => {
        getCars();
    }, []);

    console.log(cars);

    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Types</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => (
                        <tr>
                            <td key="carIndex"></td>
                            <td key={car.id}>{car.id}</td>
                            <td key={car.description}>{car.description}</td>
                            <td key={car.type_id}>{car.type_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListCars;