// routes
import AuthRoutes from "../routes/AuthRoutes";
import LogoText from "../widgets/LogoText";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-indigo-100">
      <div className="absolute top-3 left-5 p-4">
        <LogoText />
      </div>

      <div className="m-auto w-[100%] min-h-[60%] flex flex-col justify-center">
        <AuthRoutes />
      </div>
    </div>
  );
};

export default AuthLayout;
