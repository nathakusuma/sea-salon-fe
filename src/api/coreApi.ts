import axios, {AxiosInstance} from "axios";
import { createBrowserHistory } from "history";

const axiosInstance : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

const history = createBrowserHistory()

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("fullName");
            window.localStorage.removeItem("isAdmin");
            history.push("/login")
            window.location.reload();
        }
        return Promise.reject(error);
    }
);

export { axiosInstance }