import React, {useState} from "react";
import contact_illustration from "../contact_illustration.svg";

function Contact() {
    const [status, setStatus] = useState("");

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <div>
            <h1 className="text-center">Contact</h1>
            <div
                className="container-fluid rounded shadow-lg py-4 px-3 mt-5"
                style={{width: "70%"}}
            >
                <div className="row mt-2">
                    <div className="col-md-6">
                        <img
                            src={contact_illustration}
                            alt="contact_illustration"
                            className="float-left"
                            style={{width: "100%", height: "100%"}}
                        />
                    </div>
                    <div className="col-md-6">
                        <form
                            className="needs-validation"
                            noValidate
                            onSubmit={(ev) => submitForm(ev)}
                            action="https://formspree.io/xzbjwkae"
                            method="POST"
                        >
                            <div className="form-group mb-4">
                                <label className="h5 text-dark contact-label">Name</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    name="name"
                                    placeholder="Eg. Harry Singh"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label className="h5 contact-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Eg. example@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label className="h5 contact-label">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Write the subject of the mail here."
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label className="h5 contact-label">Message</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    name="message"
                                    placeholder="Write your message here."
                                    style={{minHeight: "20vh"}}
                                    required
                                />
                            </div>
                            <div className="form-group text-center">
                                {status === "SUCCESS" ? (
                                    <h5 className="text-success">
                                        Thanks! Your response has been submitted
                                    </h5>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-outline-success rounded-pill shadow"
                                        style={{width: "25%"}}
                                    >
                                        Send
                                    </button>
                                )}
                                {status === "ERROR" && (
                                    <h5 className="text-danger">Oops! There was an error.</h5>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
