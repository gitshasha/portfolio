import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <nav class="navbar">
          <Link to="/">
            <h3 class="title">Mimic</h3>
          </Link>
          <ul class="navlink">
            <li class="lin">
              <a href="/about">About</a>
            </li>
            <li class="lin">
              <a href="/work">Work</a>
            </li>
            <li class="lin">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
