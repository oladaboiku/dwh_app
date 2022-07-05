import React,{useState}  from "react";
import "./register.css";
import Nav from '../../components/nav/Nav';

function Register() {
  const [selectedFile, setSelectedFile] = useState([]);
  const changeHandler = (event) => {
		setSelectedFile(URL.createObjectURL(event.target.files[0]))
	};

  return (
    <div className="register">
      <Nav/>
      <div className="registerCon">
        <div className="form">
          <div className="formTxt">
            <h1>kindly fill out the form</h1>
          </div>
          <form action="">
            <div className="formControl">
              <div className="formUpload">
              <h3>Upload your picture</h3>
              <div className="upload_image"> 
                <img src={selectedFile} alt=''/>
              </div>
              <div className="upload">
                {/* <FontAwesomeIcon Icon="fa-solid fa-upload"/> */}
              <input type="file" onChange={changeHandler}/>
              </div>
              </div>
            </div>
            <div className="formControl">
              <h3>Bio data</h3>
              <div className="username">
                <label htmlFor="username">Name</label>
                <input type="text" name="userName" placeholder="enter name" />
              </div>
              <div className="username">
                <label htmlFor="addrees">address</label>
                <input type="text" name="address" placeholder="enter address" />
              </div>
              <div className="username">
                <label htmlFor="phone">phone</label>
                <input type="phone" name="phone" placeholder="enter phone" />
              </div>
              <div className="username">
                <label htmlFor="email">email</label>
                <input type="text" name="email" placeholder="enter email" />
              </div>
            </div>
            <div className="formControl">
              <div className="formCheck">
                <h2>choose any of our training plans</h2>
                <div className="form_boxes">
                    <div className="train_box">
                      <div className="cardBox">
                        <h3>3 month training</h3>
                        <div className="cardBoxTxt">
                          <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                          </ul>
                        </div>
                        <div className="cardBoxPrice">
                          <p>&#8358;25,000</p>
                        </div>
                        <button>select</button>
                      </div>
                    </div>
                    <div className= "train_box">
                    <div className="cardBox">
                        <h3>6 month training</h3>
                        <div className="cardBoxTxt">
                          <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                          </ul>
                        </div>
                        <div className="cardBoxPrice">
                          <p>&#8358;50,000</p>
                        </div>
                        <button>select</button>
                      </div>
                    </div>
                    <div className="train_box">
                    <div className="cardBox">
                        <h3>1 year training</h3>
                        <div className="cardBoxTxt">
                          <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                          </ul>
                        </div>
                        <div className="cardBoxPrice">
                          <p>&#8358;100,000</p>
                        </div>
                        <button>select</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="formControl">
              <div className="form_guarantor">
                <h3>guarantor</h3>
                <div className="username">
                <label htmlFor="username">Name</label>
                <input type="text" name="userName" placeholder="enter name" />
              </div>
              <div className="username">
                <label htmlFor="addrees">address</label>
                <input type="text" name="address" placeholder="enter address" />
              </div>
              <div className="username">
                <label htmlFor="phone">phone</label>
                <input type="phone" name="phone" placeholder="enter phone" />
              </div>
              <div className="username">
                <label htmlFor="email">email</label>
                <input type="text" name="email" placeholder="enter email" />
              </div>
              </div>
            </div>
            <div className="formControl">
              <div className="form_decalare">
                <h3>declaration</h3>
                <p>I.......................................................... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum ea numquam commodi quam delectus modi recusandae neque consectetur molestias.</p>
              </div>
            </div>
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
