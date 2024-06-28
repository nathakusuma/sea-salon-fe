import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {LoginRequest, LoginResponse} from "../../types/auth.ts";
import {handleLogin} from "../../api/services/auth.ts";

export default function LoginForm(): JSX.Element {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginRequest>({
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await handleLogin(formData);
            window.alert("Login successful!");
            const payload : LoginResponse = response.data.payload;
            window.localStorage.setItem("token", payload.token);
            window.localStorage.setItem("fullName", payload.fullName);
            navigate("/");
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
                            <h3 className="card-title text-center">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input required type="email" className="form-control" id="email"
                                           onChange={handleChange} placeholder="Enter email"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input required type="password" className="form-control" id="password"
                                           onChange={handleChange} placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block text-white">Submit
                                </button>
                            </form>
                            <div className="mt-3">
                                Don't have an account? <a href="/register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}