import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  return (
    <>
      {store.authenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="container text-center my-4">
          <section className="background-radial-gradient overflow-hidden">
            <div className="contai ner px-4 py-5 px-md-5 text-center text-lg-start my-5">
              <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                  <h1
                    className="my-5 display-5 fw-bold ls-tight"
                    style={{ color: "hsl(218, 81%, 95%)" }}
                  >
                    Log in <br />
                    <span style={{ color: "hsl(218, 81%, 75%)" }}>
                      to this site :)
                    </span>
                  </h1>
                  <p
                    className="mb-4 opacity-70"
                    style={{ color: "hsl(218, 81%, 85%)" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus, expedita iusto veniam atque, magni tempora
                    mollitia dolorum consequatur nulla, neque debitis eos
                    reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                  </p>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                  <div
                    id="radius-shape-1"
                    className="position-absolute rounded-circle shadow-5-strong"
                  ></div>
                  <div
                    id="radius-shape-2"
                    className="position-absolute shadow-5-strong"
                  ></div>

                  <div className="card bg-glass">
                    <div className="card-body px-4 py-5 px-md-5">
                      <form className="mask mask-custom">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                          style={{
                            backgroundColor: "#ad1fff",
                            borderColor: "#ad1fff",
                          }}
                          onClick={handleSubmit}
                        >
                          Log in
                        </button>

                        <Link to="/signup" className="text-decoration-none">
                          <div>Don't have an account? Sign up </div>
                        </Link>

                        <div className="text-center visually-hidden">
                          <p>or log in with:</p>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-github"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
