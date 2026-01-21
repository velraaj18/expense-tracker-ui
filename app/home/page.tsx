import Navbar from "../Components/NavBar";
import { Card } from "primereact/card";

const DashBoard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard container max-w-370 mt-10">
        <div className="flex items-center justify-around">
          <Card
            className="w-100 md:w-150 border bg-white"
          >
            <h1>Hello Raaj!!</h1>
          </Card>
          <div className="vertical-gap"></div>
          <Card
            header={"Hello"}
            footer={"End"}
            className="w-100 md:w-150 border"
          >
            <p>Day</p>
          </Card>
        </div>

        <div className="horizontal-gap"></div>

        <div className="flex items-center justify-around">
          <Card
            header={"Hello"}
            footer={"End"}
            className="w-100 md:w-150 border"
          >
            <p>Day</p>
          </Card>
          <div className="vertical-gap"></div>   
          <Card
            header={"Hello"}
            footer={"End"}
            className="w-100 md:w-150 border"
          >
            <p>Day</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
