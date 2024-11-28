import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { AuthLayout } from "../../../../layouts/AuthLayout.jsx";
import Input from "../../../../components/ui/Input.jsx";
import Button from "../../../../components/ui/Button.jsx";
import { apiLoginDashboard } from "../services/api.login.dashboard.js";
import { jwtDecode } from "jwt-decode";
import useUser from "../../../../stores/useStore.js";
import { useNavigate } from "react-router-dom";

export const LoginAdmin = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassordChange(e) {
    setPassword(e.target.value);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  async function onSubmitlogin(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      const data = await apiLoginDashboard(email, password);
      const token = data.accessToken;
      const decoded = jwtDecode(token);
      localStorage.setItem("token", token)
      setUser(decoded);
      if (decoded.role === "dokter") {
        navigate("/dashboard/dokter");
      } else {
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Login gagal, periksa email dan password Anda.");
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Dashboard Login">
      <form className="space-y-4" onSubmit={onSubmitlogin}>
        <div>
          <h5 className="text-white font-semibold">Email</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            type="email"
            placeholder="Masukan email anda"
            onChange={handleEmailChange}
          ></Input>
        </div>
        <div>
          <h5 className="text-white font-semibold">Password</h5>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="block w-full border font-medium placeholder:font-light focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 shadow-sm transition duration-200 py-2 px-3 text-base rounded-lg bg-transparent placeholder:text-white text-white mt-1"
              placeholder="password"
              value={password}
              onChange={handlePassordChange}
            />
            <div
              className="absolute inset-y-0 end-0 flex items-center cursor-pointer pe-3"
              onClick={togglePassword}
            >
              {showPassword ? (
                <AiOutlineEye size={24} color="white" />
              ) : (
                <AiOutlineEyeInvisible size={24} color="white" />
              )}
            </div>
          </div>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        <Button
          variant="secondary"
          className={"w-full flex justify-center text-md"}
          type="submit"
          disable={isLoading}
        >
          {isLoading ? "Loading..." : "Masuk"}
        </Button>
      </form>
    </AuthLayout>
  );
};
