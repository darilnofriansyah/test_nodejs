const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Cars = require('../models/Cars');

//GET ALL CARS
router.get('/', (req, res) => 
    Cars.findAll()
        .then(cars => {
            console.log(cars);
            res.json({cars});
        })
        .catch(err => console.log(err))
);

//GET CARS
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.findAll({
        where: {
            id: id
        }
    })
    .then(cars => {
        console.log(cars);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
});

//ADD CARS
router.post('/add', (req, res) => {
    const { description, type_id } = req.body;
    Cars.create({
        description,
        type_id
    })
    .then(cars => res.redirect('/cars'))
    .catch(err => console.log(err));
});


module.exports = router;


// //create
// app.post('/cars', async(req,res) => {
//     try {
//         const { description } = req.body;
//         const newCars = await pool.query(
//             "INSERT INTO cars (description) VALUES($1) RETURNING *", 
//             [description]
//         );

//         res.json(newCars.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// //get all
// app.get('/cars', async(req,res) => {
//     try {
//         const allCars = await pool.query(
//             "SELECT * from cars"
//         );
//         res.json(allCars.rows);
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// //get detail
// app.get('/cars/:id', async(req,res) => {
//     try {
//         const { id } = req.params;
//         const car = await pool.query(
//             "SELECT * FROM cars WHERE cars_id = ($1)", 
//             [id]
//         );
        
//         res.json(car.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// //update
// app.put('/cars/:id', async(req,res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         const updateCar = await pool.query(
//             "UPDATE cars SET description = ($1) WHERE cars_id = ($2) RETURNING *", 
//             [description, id]
//         );
        
//         res.json(updateCar.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// //delete
// app.delete('/cars/:id', async(req,res) => {
//     try {
//         const { id } = req.params;
//         const deleteCar = await pool.query(
//             "DELETE FROM cars WHERE cars_id = $1",
//             [id]
//         )

//         res.json('Cars was deleted');
//     } catch (error) {
//         console.error(error.message);
//     }
// });