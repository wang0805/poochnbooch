import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <p>TBC</p>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/wang0805/poochnbooch">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
