import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
const UserAuthForm = ({ type }) => {
  return (
    <>
      <section>
        <form>
          <h4
            className="text-4xl font-gelasio capitalize text-center"
            style={{ fontWeight: "bold", marginBottom: "2rem" }}
          >
            {type == "sign-in" ? "Hello Again" : "Join Us Today"}
          </h4>
          {type !== "sign-in" ? (
            <>
              <InputBox
                name="fullname"
                type="text"
                placeholder="Full Name"
                icon="bi-person"
              />
            </>
          ) : (
            " "
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="E-mail"
            icon="bi-envelope"
          />
    
          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="bi-key"
          />

          <button
            className="btn-dark center"
            type="submit"
            style={{ marginTop: "2rem", marginBottom: "1.1rem" }}
            // onClick={handleSubmit}
          >
            {type.replace("-", " ")}
  

          
          </button>

          <button type="submit" className="google">
            Sign in with your google account
          </button>
          
    
          
          
          {type == "sign-in" ? (
            <p
              className="mt-3 "
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                gap: "5px", 
              }}
            >
              Dont have an account ?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Join us today
              </Link>
            </p>
          ) : (
            <p
              className="mt-3 "
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                gap: "5px",
              }}
            >
              Already a member ?
              <Link to="/signin" style={{ textDecoration: "none" }}>
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </>
  );
};
export default UserAuthForm;
