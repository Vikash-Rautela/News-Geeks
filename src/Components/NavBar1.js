import React from "react";

function NavBar1() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            News Geek
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onSubmit={console.log("Hello")}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
