import { Card } from "primereact/card";

const Page = () => {
  return (
    <>
      <div className="dashboard">
        <div className="header-bold">
          DashBoard
        </div>
        <div className="dashboard-cards flex">
          <Card className="flex">
            <p className="card-text">SBI</p>
            <p className=""></p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;
