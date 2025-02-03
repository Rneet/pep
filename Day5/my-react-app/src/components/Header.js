import React from 'react';

function Header({ regNo, sname }) {
  return (
    <header>
      <h1>Registration Number: {regNo}</h1>
      <h2>Name: {sname}</h2>
    </header>
  );
}

export default Header;