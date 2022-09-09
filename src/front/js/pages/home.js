import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <>
      {store.authenticated ? (
        <h1 className="text-center m-5 p-5">WELCOME! You have logged in :)</h1>
      ) : (
        <h1 className="text-center m-5 p-5">
          WELCOME!{" "}
          <Link to="/login" className="text-decoration-none text-dark">
            Click here to access :)
          </Link>
        </h1>
      )}
    </>
  );
};
