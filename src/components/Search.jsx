import React from 'react'
import NavBar from './NavBar'

const Search = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="search" className="form-label">Search Id:</label>
              <input type="text" id="search" className="form-control" />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-success">Search</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search