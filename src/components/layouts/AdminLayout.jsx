// routes
import AdminRoutes from "../routes/AdminRoutes";
import MainBoxWidget from "../widgets/MainBoxWidget";
import Navbar from "../widgets/Navbar";
import Topbar from "../widgets/Topbar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex flex-col items-start w-full gap-4 h-[667px] overflow-hidden bg-off-teal px-4 py-2">
        <Topbar />
        <Navbar />
        <MainBoxWidget>
          <AdminRoutes />
        </MainBoxWidget>
        {/* <div className="w-full flex flex-col">
          <div className="h-screen overflow-y-scroll w-full p-4">
            <AdminRoutes />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AdminLayout;
