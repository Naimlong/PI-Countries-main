import React from "react";
import "./paginado.css";

function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumber?.map((number) => (
          <li className="number" key={number}>
            <button className="buttonNumber" onClick={() => paginado(number)}>{number} </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginado;