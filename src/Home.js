import React from "react";
import "./home.css";
import image from "./ima.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div class="cont">
        <div class="firsthalf">
          <div class="content">
            <span class="name">I'm Shashank</span>
            <h1 class="job">Web-developer</h1>
            <span class="name">Frontend developer / Designer</span>
            <p class="bio">
              Tell me who you want me to be and I'll be that. Ask me how
            </p>
            <Link to="/about">
              <button class="workbut">Contact me</button>
            </Link>
          </div>

          <div class="svg">
            <Link to="/about">
              <svg
                onclick="location.href='about.html'"
                width="104"
                height="104"
                viewBox="0 0 174 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Desktop - 6">
                  <g id="LIGHT1">
                    <path
                      id="Polygon1"
                      d="M97.5 73.1699C100.833 75.0944 100.833 79.9056 97.5 81.8301L56.25 105.646C52.9167 107.57 48.75 105.165 48.75 101.316L48.75 53.6843C48.75 49.8353 52.9167 47.4297 56.25 49.3542L97.5 73.1699Z"
                      fill="#dda1ff"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g id="DARK1">
                    <path
                      id="Polygon2"
                      d="M113.5 73.1699C116.833 75.0944 116.833 79.9056 113.5 81.8301L72.25 105.646C68.9167 107.57 64.75 105.165 64.75 101.316V53.6843C64.75 49.8353 68.9167 47.4297 72.25 49.3542L113.5 73.1699Z"
                      fill="#a887fa"
                      fill-opacity="0.8"
                    />
                    <path
                      id="Polygon3"
                      d="M97.5 73.1699C100.833 75.0944 100.833 79.9056 97.5 81.8301L56.25 105.646C52.9167 107.57 48.75 105.165 48.75 101.316L48.75 53.6843C48.75 49.8353 52.9167 47.4297 56.25 49.3542L97.5 73.1699Z"
                      fill="#bd4efc"
                      fill-opacity="0.8"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Home;
