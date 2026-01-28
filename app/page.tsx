import DashBoard from "./Components/DashBoard";
import Transactions from "./Components/Transactions";

const Page = () => {
  return (
    <>
      <DashBoard/>
      <div className='horizontal-gap-sm md:horizontal-gap'></div>
      <Transactions/>
    </>
  );
};

export default Page;
