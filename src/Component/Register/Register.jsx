import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useContextHook from "../../useCustomHook/useContextHook";

const Register = () => {
  const { createNewUser, updateProfileInfo, emailVerification } =
    useContextHook();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createNewUser(email, password)
      .then(() => {
        updateProfileInfo(name, photo).then();
        emailVerification().then();
        toast.success("Register success");
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="my-6 space-y-3 rounded-xl lg:w-1/2 mx-2 md:mx-auto">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleRegister} className="space-y-5">
        <div className="space-y-1 text-sm">
          <label htmlFor="Your Name" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border"
            style={{ outline: "none" }}
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="Your Email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl border"
            style={{ outline: "none" }}
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="Your Image URL" className="block dark:text-gray-600">
            Image
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your Image URL"
            className="w-full px-4 py-3 rounded-xl border"
            style={{ outline: "none" }}
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border"
            style={{ outline: "none" }}
          />
        </div>
        <button className="block w-full p-3 text-center dark:text-gray-50 dark:bg-redFood rounded-xl">
          Register
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?{" "}
        <Link
          to={"/login"}
          rel="noopener noreferrer"
          className="underline dark:text-redFood"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
