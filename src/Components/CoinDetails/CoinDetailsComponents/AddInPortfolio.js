import React from 'react'
import { Link } from 'react-router-dom'

const AddInPortfolio = () => {
    return (
        <div>
            <Link to="/Portfolio"><button className="btn btn-primary">+ Add in Portfolio</button></Link>
        </div>
    )
}

export default AddInPortfolio
