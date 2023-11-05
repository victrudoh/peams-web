// panels
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";

const Test = () => {
  return (
    <>
      <div className="flex gap-6 items-start justify-center pt-[4rem] m-auto w-[85%] h-screen mb-5">
        <Leftpanel />
        <RightPanel />
      </div>
    </>
  );
};

export default Test;
