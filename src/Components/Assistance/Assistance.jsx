import React from "react"

const Assistance = () => {
    return (
        <React.Fragment>
            <div class="mb-3 background-home">
                <label for="exampleFormControlInput1" class="form-label">Dirección de email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@email.com" required />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Ingrese texto</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
</React.Fragment>
    )
}

export default Assistance