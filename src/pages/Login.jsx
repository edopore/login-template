import "./Login.css";
import imageDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import imagemobile from "../assets/images/illustration-sign-up-mobile.svg";
import { useState } from "react";

export function Login() {
  const checkemail = (email) => {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(checkemail(event.target[0].value));
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="subscribe-modal">
            <ul className="subscribe-list">
              <li>
                <ul className="form-list">
                  <li>
                    <h1 className="login-title">Stay updated!</h1>
                  </li>
                  <li>
                    <p className="desc">
                      Join 60,000+ product managers receiving monthly updates
                      on:
                    </p>
                  </li>
                  <li>
                    <ul className="list-icon">
                      <li>
                        <p className="desc">
                          Product discovery and building what matters
                        </p>
                      </li>
                      <li>
                        <p className="desc">
                          Measuring to ensure updates are a success
                        </p>
                      </li>
                      <li>
                        <p className="desc">And much more!</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <form className="subscribe-form" onSubmit={handleSubmit}>
                      <label>Email address</label>
                      <input
                        type="email"
                        name="email"
                        id="email-form"
                        placeholder="email@company.com"
                      />
                      <button id="submit-email" type="submit">
                        Subscribe to monthly newsletter
                      </button>
                    </form>
                  </li>
                </ul>
              </li>
              <li>
                <img src={imageDesktop} className="image" alt="React logo" />
              </li>
            </ul>
          </section>
          <section className="success-form">
            <ul>
              <li>
                <p className="desc">Thanks for subscribing!</p>
              </li>
              <li>
                <p className="desc">
                  A confirmation email has been sent to ash@loremcompany.com.
                </p>
              </li>
              <li>
                <p className="desc">
                  Please open it and click the button inside to confirm your
                  subscription.
                </p>
              </li>
              <li>
                <button type="button">Dismiss message</button>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/edopore">Eduardo José Maya Rodriguez</a>.
        </div>
      </footer>
    </>
  );
}
