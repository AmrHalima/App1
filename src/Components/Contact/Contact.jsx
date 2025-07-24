import { useEffect, useState } from "react";
import Footer from "../Footer/Footer.jsx";
import Underline from "../Underline/Underline.jsx";
export default function Contact() {
  let [age,setAge]=useState('');
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
  let [name, setName] = useState('');

    return (
        <>
            <div className="mt-5 pt-5">
                <Underline heading="CONTACT SECTION" color="c-primary" />
                <div className="container">
                    <div className="w-50 m-auto pb-5 pt-4">
                        <form>
                            <div className="position-relative z-0">
                                <label
                                    htmlFor="userNameInput"
                                    className={
                                        name
                                            ? "fw-bold textc-primary position-absolute top-24px"
                                            : "fw-bold textc-primary position-absolute"
                                    }
                                >
                                    Name :
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userNameInput"
                                    className="form-control mb-4 position-relative z-0"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="name"
                                />
                            </div>
                            <div className="position-relative">
                                <label
                                    htmlFor="userAgeInput"
                                    className={
                                        age
                                            ? "fw-bold textc-primary position-absolute top-24px"
                                            : "fw-bold textc-primary position-absolute"
                                    }
                                >
                                    Age :
                                </label>
                                <input
                                    type="number"
                                    name="userAge"
                                    id="userAgeInput"
                                    className="form-control mb-4 position-relative"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Age"
                                />
                            </div>
                            <div className="position-relative">
                                <label
                                    htmlFor="userEmailInput"
                                    className={
                                        email
                                            ? "fw-bold textc-primary position-absolute top-24px"
                                            : "fw-bold textc-primary position-absolute"
                                    }
                                >
                                    Email :
                                </label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    id="userEmailInput"
                                    className="form-control mb-4 position-relative"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="position-relative">
                                <label
                                    htmlFor="userPasswordInput"
                                    className={
                                        password
                                            ? "fw-bold textc-primary position-absolute top-24px"
                                            : "fw-bold textc-primary position-absolute"
                                    }
                                >
                                    Password :
                                </label>
                                <input
                                    type="password"
                                    name="userPassword"
                                    id="userPasswordInput"
                                    className="form-control mb-4 position-relative"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                />
                            </div>
                        </form>
                        <button
                            type="submit"
                            className="bgc-secondary p-2 rounded border-0 text-light"
                        >
                            send Message
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
