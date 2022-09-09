import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
  };

  return (
    <nav className="navbar navbar-light bg-dark bg-gradient py-3">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <span className="navbar-brand mb-0 h1 text-light">Home</span>
        </Link>

        <div className="ml-auto">
          {store.authenticated ? (
            <Link to="/">
              <button className="btn btn-trasnparent" onClick={handleClick}>
                <FiLogOut size={30} style={{ color: "white" }} />
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-trasnparent">
                <AiOutlineUser size={30} style={{ color: "white" }} />
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
