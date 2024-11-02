import { AuthLayout } from "../../layouts/AuthLayout.jsx";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <AuthLayout title='Login Sekarang'>
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
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            type="password"
            placeholder="password"
          ></Input>
        </div>
        <Button
          variant="secondary"
          className={"w-full flex justify-center text-md"}
        >
          Daftar
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
