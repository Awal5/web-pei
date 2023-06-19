import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useInput from "@/hooks/useInput";
import "@/css/login.css";
import { Link } from "gatsby";

function LoginForm({ login, msg }) {
  const [username, setUsername] = useInput("");
  const [password, setPassword] = useInput("");

  const onSubmit = e => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <Container className="mt-5 p-5">
      <Row className="justify-content-center mt-5">
        <Col lg="5">
          <main className="form-signin w-100 m-auto">
            <div className="bg-white p-5 rounded shadow">
              <h1 className="text-center mb-4">Login Admin</h1>
              <small className="text-danger">{msg}</small>
              <form onSubmit={onSubmit}>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    onChange={setUsername}
                    value={username}
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={setPassword}
                    value={password}
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <button
                  className="w-100 btn btn-lg btn-primary mt-3"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
            <Link to="/" className="pt-3">
              Kembali Ke Home
            </Link>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
