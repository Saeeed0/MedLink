import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/Divider/Divider";
import style from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Required } from "../../components/Required/Required";
import axios from "axios";
import { useContext, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { userContext } from "../../context/UserContect/UserContext";
function Login() {
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [isChecked, setIsChecked] = useState(false);

  const { setUserToken } = useContext(userContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string().required("password is required"),
  });

  async function loginSubmit(values) {
    setIsLoading(true);
    const { data } = await axios
      .post("http://medlink.runasp.net/Auth/User/Login", values)
      .catch((error) => {
        setError(error?.response?.data?.detail);

        setIsLoading(false);
      });

    if (data?.isSuccess) {
      navigate("/");
      setIsLoading(false);

      if (isChecked) {
        setUserToken(data?.data?.token);
        localStorage.setItem("medlinkUserToken", data?.data?.token);
      }
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginSubmit,
  });
  return (
    <>
      <div className=" bg-primary  w-25 mt-5 m-auto text-center rounded-top-4 p-1 text-light">
        Login
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-25 rounded-bottom-4 m-auto p-5 form-shadow"
      >
        {error && (
          <div className="alert alert-danger" role="alert">
            {error || "Something went wrong. Please try again."}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
            <Required />
          </label>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            className="form-control"
            id="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="alert text-danger p-0" role="alert">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
            <Required />
          </label>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            className="form-control"
            id="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="alert text-danger p-0" role="alert">
              {formik.errors.password}
            </div>
          )}
        </div>

        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="btn btn-primary d-flex justify-content-center text-light w-100"
        >
          {isLoading ? (
            <BallTriangle
              height={25}
              width={50}
              radius={5}
              color="#fff"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "LOGIN"
          )}
        </button>

        <div className="d-flex justify-content-between my-3">
          <div className="form-check d-block ">
            <input
              className="form-check-input  "
              type="checkbox"
              value="rememberMe"
              id="rememberMe"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <Link
            className="text-primary text-decoration-none d-block"
            to="/ForgetPassword"
          >
            Forget Your Password?
          </Link>
        </div>

        <Divider />
        <Link
          onClick={() => alert("Coming Soon")}
          className="bg-primary d-block text-decoration-none text-center text-light p-1 my-3 rounded"
        >
          Connect With Facebook
        </Link>
        <div className="mt-3 text-center">
          <span>New User ? </span>
          <Link className={`${style.link} ms-3 fw-bold `} to="/SignUp">
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
