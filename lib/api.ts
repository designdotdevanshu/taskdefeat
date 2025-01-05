import axios from "axios";
// import { toast } from "sonner";

const URL = {
  BASE: "https://jsonplaceholder.typicode.com",
  TASKS: "/todos",
};

// axios interceptors
const axiosInstance = axios.create({
  baseURL: URL.BASE,
});

// async handler for api calls
const asyncHandler = async (fn: CallableFunction) => {
  try {
    const response = await fn();
    return [response, null];
  } catch (error) {
    return [null, error];
    // if (error instanceof Error) {
    //   toast.error(error.message);
    //   throw new Error(error.message);
    // } else {
    //   toast.error("An error occurred. Please try again.");
    //   throw new Error(String(error));
    // }
  }
};

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export { URL, asyncHandler };

export default axiosInstance;
