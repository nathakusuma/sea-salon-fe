import {useState} from "react";
import {RegisterRequest} from "../../types/auth.ts";
import {handleRegister} from "../../api/services/auth.ts";
import {useNavigate} from "react-router-dom";

export default function RegisterForm(): JSX.Element {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterRequest & {confirmPassword: string}>({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            window.alert("Password confirmation does not match. Please try again.");
            return;
        }

        try {
            const response = await handleRegister(formData);
            window.alert(response.data.message + " Please log in.");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
        }
    }

    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Register</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input required type="text" className="form-control" id="fullName" onChange={handleChange} placeholder="Enter your full name"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input required  type="email" className="form-control" id="email" onChange={handleChange}
                                           placeholder="Enter email"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input required type="text" className="form-control" id="phoneNumber" onChange={handleChange}
                                           placeholder="Enter your phone number"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input required type="password" className="form-control" id="password"
                                           onChange={handleChange}
                                           placeholder="Password"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input required type="password" className="form-control" id="confirmPassword"
                                           onChange={handleChange}
                                           placeholder="Confirm password"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block text-white">Register
                                </button>
                            </form>
                            <div className="mt-3">
                                Already have an account? <a href="/login">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}