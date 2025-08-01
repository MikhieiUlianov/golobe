"use client";

import "@/components/header/header.scss";
import { useState } from "react";
export default function Header() {
  const [logged, setLogged] = useState(true);

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__find">
          <button className="header__find-block">
            <img src="/icons/header/airplane.svg" alt="airplane" />
            <div className="fw-600 fz-14 f-montserrat header__find-text">
              Find Flight
            </div>
          </button>
          <button className="header__find-block">
            <img src="/icons/header/bed-black.svg" alt="bed" />
            <div className="fw-600 fz-14 f-montserrat header__find-text">
              Find Stays
            </div>
          </button>
        </div>

        <img className="header__logo" src="/icons/logo.svg" alt="logo" />

        <div className="header__desktop">
          {logged ? (
            <div className="header__logged">
              <div className="header__logged-block">
                <img
                  className="header__logged-img"
                  src="/icons/header/heart-black.svg"
                  alt="heart"
                />
                <div className="header__logged-text fw-600 fz-14 f-montserrat">
                  Favourites
                </div>
              </div>
              <span className="header__logged-divider"></span>
              <div className="header__logged-profile">
                <img
                  src="/icons/user.svg"
                  alt="selfie"
                  className="header__logged-profile-photo"
                />
                <div className="header__logged-profile-name  fw-600 fz-14 f-montserrat">
                  John D.
                </div>
              </div>
            </div>
          ) : (
            <div className="header__login">
              <button className="header__login-btn fw-600 fz-14 f-montserrat">
                Login
              </button>
              <button
                className="header__login-btn fw-600 fz-14 f-montserrat"
                id="signBtn"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
