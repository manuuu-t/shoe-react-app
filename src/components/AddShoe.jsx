import React from 'react'
import NavBar from './NavBar'

const AddShoe = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="brand" className="form-label">Brand</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="quality" className="form-label">Quality</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button type="button" className="btn btn-success">Add Shoe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddShoe