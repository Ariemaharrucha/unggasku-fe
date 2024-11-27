import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Input from "../../../../components/ui/Input.jsx";
import Button from "../../../../components/ui/Button.jsx";
import { AuthLayout } from "../../../../layouts/AuthLayout.jsx";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setPassword(e.target.value);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <AuthLayout title="Login Sekarang">
      <form className="space-y-4">
        <div>
          <h5 className="text-white font-semibold">Email</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            type="email"
            placeholder="Masukan email anda"
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
              onChange={handleChange}
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
        >
          Masuk
        </Button>
        <p className="text-white text-center">
          Sudah punya akun?{" "}
          <Link to={"/register"} className="text-blue-700 font-semibold">
            Daftar
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
