import React from "react";

function SortingNav() {
  return (
    <div
      className="d-flex align-items-center p-3 justify-content-evenly mt-3"
      style={{ backgroundColor: "#D587FE" }}
    >
      <div class="dropdown-start me-3">
        <button
          style={{ backgroundColor: "white", color: "black" }}
          class="btn dropdown-toggle  w-100 "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Specific Category
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Fee Related
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Transportation
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Anti Ragging
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Lost and Found
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Mental health
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Library and lab issues
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown-start me-3">
        <button
          style={{ backgroundColor: "white", color: "black" }}
          class="btn dropdown-toggle  w-100 "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search by Category
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Fee Related
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Transportation
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Anti Ragging
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Lost and Found
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Mental health
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Library and lab issues
            </a>
          </li>
        </ul>
      </div>
      <form className="me-3">
        <div className="form-control">
          <input
            type="search"
            placeholder="Search by ID"
            style={{ border: "none" }}
          />
          <i class="bi bi-search"></i>
        </div>
      </form>
      <form>
        <div className="form-control">
          <input
            type="search"
            placeholder="Search by Keyword"
            style={{ border: "none" }}
          />
          <i class="bi bi-search"></i>
        </div>
      </form>
    </div>
  );
}

export default SortingNav;
