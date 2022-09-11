import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != "undefined")
      actions.appendToken();
  }, [store.token]);

  return (
    <>
      {store.authenticated ? (
        <h1 className="text-center m-5 p-5">WELCOME! You have logged in :)</h1>
      ) : (
        <h1 className="text-center m-5 p-5">
          WELCOME!{" "}
          <Link
            to="/login"
            className="text-decoration-none"
            style={{ color: "hsl(220, 73%, 65%)" }}
          >
            Click here to access :)
          </Link>
        </h1>
      )}
    </>
  );
};
