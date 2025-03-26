import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,    
        zIndex: 50,
        height: "100vh",
      }}
    >
      <PuffLoader
        color="#ff5733"
        size={100}
        style={{
          position: "relative",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Loader;
