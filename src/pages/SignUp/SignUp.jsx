import style from "./SignUp.module.css"
import { useFormik } from "formik";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import * as Yup from "yup";
import Egypt from "../../assets/images/flages/Egypt.jpg";
import Jordan from "../../assets/images/flages/Jordan.jpg";
import Kenya from "../../assets/images/flages/Kenya.jpg";
import Lebanon from "../../assets/images/flages/Lebanon.jpg";
import Nigeria from "../../assets/images/flages/Nigeria.jpg";
import Saudi from "../../assets/images/flages/Saudi.jpg";
import Select from "react-select";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const countries = [
    { name: "Egypt", img: Egypt, code: "+20" },
    { name: "Jordan", img: Jordan, code: "+962" },
    { name: "Kenya", img: Kenya, code: "+245" },
    { name: "Lebanon", img: Lebanon, code: "+961" },
    { name: "Nigeria", img: Nigeria, code: "+234" },
    { name: "Saudi", img: Saudi, code: "+966" },
  ];
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  const countryOptions = countries.map((c) => ({
    value: c.code,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={c.img}
          alt={c.name}
          style={{ width: 20, height: 15, marginRight: 8 }}
        />
        {c.name} ({c.code})
      </div>
    ),
  }));

  let [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Min length is 3")
      .max(15, "Max length is 15")
      .required("Name is required"),

    email: Yup.string().email("Email is invalid").required("Email is required"),

    phone: Yup.string()
      .matches(
        /^01[0125][0-9]{8}$/,
        "Phone number must be a valid Egyptian number"
      )
      .required("Phone number is required"),

    birthDate: Yup.date()
      .max(new Date(), "Birth date cannot be in the future")
      .required("Birth date is required"),

    password: Yup.string()
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        "Password must be at least 8 characters long and include uppercase, lowercase, number and special character"
      )
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  async function signUpSubmit(values) {
    setIsLoading(true);
    const { data } = await axios
      .post(`http://medlink.runasp.net/Auth/User/SignUp`, values)
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log(error);
      });
    if (data?.isSuccess) {
      setIsLoading(false);
      navigate("/Login");
    }
    console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      birthDate: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  onSubmit: signUpSubmit,
    validationSchema,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-50  form-shadow rounded-4 p-5 m-auto mt-5">
        {error && (
          <div className="alert  alert-danger" role="alert">
            {error.response?.data?.detail ||
              "An error occurred in server please try again later"}
          </div>
        )}
        <div className="row">
          {/* Name */}
          <div className=" col-4">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
          </div>
          <div className="col-8 mb-3">
            <input
              {...formik.getFieldProps("name")}
              type="text"
              className="form-control"
              id="name"
              name="name"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="alert text-danger m-0 p-0 pb-2" role="alert">
                {formik.errors.name}
              </div>
            )}
          </div>

          {/* Phone */}
          <div className="mb-2 col-4">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="text-danger">*</span>
            </label>
          </div>
          <div className="col-8  mb-3">
            <div className="input-group">
              <input
                {...formik.getFieldProps("phone")}
                type="tel"
                className="form-control "
                id="phone"
                name="phone"
              />

              <Select
                className="w-25"
                options={countryOptions}
                value={selectedCountry}
                onChange={(selectedOption) =>
                  setSelectedCountry(selectedOption)
                }
              />
            </div>
            {formik.errors.phone && formik.touched.phone && (
              <div className="alert text-danger m-0 p-0 pb-2" role="alert">
                {formik.errors.phone}
              </div>
            )}
          </div>

          <div className="mb-2 col-4">
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
          </div>
          <div className="col-8 mb-3">
            <input
              {...formik.getFieldProps("email")}
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="alert text-danger m-0 p-0 pb-2" role="alert">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="mb-2 col-4">
            <label htmlFor="birthDate" className="form-label">
              Birth Date <span className="text-danger">*</span>
            </label>
          </div>
          <div className="col-8 mb-3">
            <input
              {...formik.getFieldProps("birthDate")}
              type="date"
              className="form-control"
              id="birthDate"
              name="birthDate"
            />
            {formik.errors.birthDate && formik.touched.birthDate && (
              <div className="alert text-danger m-0 p-0 pb-2" role="alert">
                {formik.errors.birthDate}
              </div>
            )}
          </div>

          <div className="mb-2 col-4">
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
          </div>
          <div className="col-8 mb-3">
            <input
              {...formik.getFieldProps("password")}
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="alert text-danger m-0 p-0 pb-2" role="alert">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div className="mb-2 col-4">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password <span className="text-danger">*</span>
            </label>
          </div>
          <div className="col-8 mb-3">
            <input
              {...formik.getFieldProps("confirmPassword")}
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <div className="alert text-danger m-0 p-0 pb-2" role="alert">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <div className="col-4"></div>
          <div className="col-8">
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="btn btn-primary fw-bold text-center w-25 mt-3"
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
                "Join Now"
              )}
            </button>
          </div>
          <div className="text-center mt-5">
            <span className="text-muted">Already Registered in MedLink ? </span>
            <Link  className={`${style.link} pb-3 fw-bold`} to="/Login">Login</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
