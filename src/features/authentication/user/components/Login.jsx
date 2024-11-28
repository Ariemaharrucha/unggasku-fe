import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Input from "../../../../components/ui/Input.jsx";
import Button from "../../../../components/ui/Button.jsx";
import { AuthLayout } from "../../../../layouts/AuthLayout.jsx";
import { loginUser } from "../services/api.login.js";
import { jwtDecode } from "jwt-decode";
import useUser from "../../../../stores/useStore.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Hapus history state sebelumnya
    if (location.state?.from) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  async function onSubmitlogin(e) {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      const token = data.accessToken;
      const decoded = jwtDecode(token);

      setUser(decoded);
      localStorage.setItem("token", token);
      setErrorMessage("");
      // Redirect ke halaman sebelumnya atau beranda
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath); 
    } catch (error) {
      setErrorMessage("Login gagal, periksa email dan password Anda.");
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <AuthLayout title="Login Sekarang">
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
              onChange={handlePasswordChange}
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
        <Button
          variant="secondary"
          className={"w-full flex justify-center text-md"}
          type="submit"
        >
          Masuk
        </Button>
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        <p className="text-white text-center">
          Belum punya akun?{" "}
          <Link to={"/register"} className="text-blue-700 font-semibold">
            Daftar
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
