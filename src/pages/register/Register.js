import React from "react";
import "./register.css";
import Nav from "../../components/nav/Nav";
import { useForm } from "react-hook-form";

const styles = {
  container: {
    width: "100%",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "10px",
  },
};
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

function Register() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="register">
      <Nav />
      <div className="registerCon">
        <div className="registerTxt">
          <h1>Register</h1>
          <span>kindly fill out all form , all is required</span>
        </div>
        <div style={styles.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <Input
                label="Name"
                register={register}
                required
                name="name"
                placeholder="Name"
                style={styles.input}
              />

              <Input
                label="Address"
                register={register}
                required
                name="address"
                placeholder="Address"
                style={styles.input}
              />

              <Input
                label="Email"
                register={register}
                required
                name="email"
                placeholder="Email"
                style={styles.input}
              />
              <Input
                label="Phone"
                register={register}
                required
                name="phone"
                placeholder="Phone"
                style={styles.input}
              />
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
            </div>
            <div className="selectProgramme">
              <h3>select one training programme</h3>
              <div className="cardSelect">
                <div className="card">
                  <div className="cardTitle">
                    <h2>3 month training</h2>
                  </div>
                  <div className="cardInfo">
                    <ol>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                  </div>

                  <button>Select</button>
                </div>
                <div className="card">
                  <div className="cardTitle">
                    <h2>6 month training</h2>
                  </div>
                  <div className="cardInfo">
                    <ol>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                  </div>
                  <button>Select</button>
                </div>
                <div className="card">
                  <div className="cardTitle">
                    <h2>one year training</h2>
                  </div>
                  <div className="cardInfo">
                    <ol>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
            <div className="form">
              <h1>Gaurantor</h1>
              <Input
                label="Name"
                register={register}
                required
                name="name1"
                placeholder="Name"
                style={styles.input}
              />
              <Input
                label="Address"
                register={register}
                required
                name="address1"
                placeholder="Address"
                style={styles.input}
              />
              <Input
                label="Email"
                register={register}
                required
                name="email1"
                placeholder="Email"
                style={styles.input}
              />
              <Input
                label="Phone"
                register={register}
                required
                name="phone1"
                placeholder="Phone"
                style={styles.input}
              />
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
