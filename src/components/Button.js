import React from 'react'
import { Link } from 'react-router-dom'

function Button({btnName, id}) {
    return (
        <Link to = {"/" +id}>
        <div className="button" id = {id}>
            <button type="button" className="btn btn-secondary btn-lg btnse">{btnName}</button>
        </div>
        </Link>
    )
}

export default Button
