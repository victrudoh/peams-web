// routes
import UserRoutes from "../routes/UserRoutes";
import UserNavbar from "../widgets/UserNavbar";

const UserLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden bg-teal-100">
      <UserNavbar />
      <div className="mx-auto w-[100%] min-h-[60%] flex flex-col justify-center">
        <UserRoutes />
      </div>
    </div>
  );
};

export default UserLayout;
