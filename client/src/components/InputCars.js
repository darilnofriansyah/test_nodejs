import React, { Fragment, useState } from "react";

const InputCars = () => {
    const [description, setDescription] = useState("");
    const [type_id, setTypeId] = useState(1);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description, type_id };
            const response = await fetch("http://localhost:5000/cars/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">Input Cars</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} 
                onChange={e=>setDescription(e.target.value)}/>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputCars;