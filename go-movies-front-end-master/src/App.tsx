import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");

  const navigate = useNavigate();

  const logOut = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      credentials: "include",
    };

    fetch("/logout", requestOptions)
      .catch((error) => {
        console.log("error logging out", error);
      })
      .finally(() => {
        setJwtToken("");
      });

    navigate("/login");
  };

  useEffect(() => {
    // execute only if the user does not already have a JWT token
    if (jwtToken === "") {
      const requestOptions: RequestInit = {
        method: "GET",
        credentials: "include",
      };

      fetch("/refresh", requestOptions).then((response: Response) =>
        response
          .json()
          .then((data) => {
            if (data.access_token) {
              setJwtToken(data.access_token);
            }
          })
          .catch((error) => {
            console.log("user is not logged in", error);
          })
      );
    }
  }, [jwtToken]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Go Watch a Movie!</h1>
        </div>
        <div className="col text-end">
          {jwtToken === "" ? (
            <Link to="/login">
              <span className="badge bg-success">Login</span>
            </Link>
          ) : (
            <a href="#!" onClick={logOut}>
              <span className="badge bg-danger">Logout</span>
            </a>
          )}
        </div>
        <hr className="md-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/movies"
                className="list-group-item list-group-item-action"
              >
                Movie
              </Link>
              <Link
                to="/genres"
                className="list-group-item list-group-item-action"
              >
                Genres
              </Link>
              {jwtToken !== "" && (
                <>
                  <Link
                    to="/admin/movie/0"
                    className="list-group-item list-group-item-action"
                  >
                    Add Movie
                  </Link>
                  <Link
                    to="/manage-catalogue"
                    className="list-group-item list-group-item-action"
                  >
                    Manage Catalogue
                  </Link>
                  <Link
                    to="/graphql"
                    className="list-group-item list-group-item-action"
                  >
                    GraphQL
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertClassName} />
          {/* pass useState variable */}
          <Outlet
            context={{
              jwtToken,
              setJwtToken,
              setAlertMessage,
              setAlertClassName,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
