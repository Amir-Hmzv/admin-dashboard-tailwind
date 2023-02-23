import DashbordBoxes from "./DashboardBoxes";
import SalesStats from "./SalesStats";
import TopSellingProducts from "./TopSellingProducts";
import WelcomeRow from "./WelcomeRow";

const Dashbord = () => {
  return (
    <>
      <WelcomeRow />
      <div className="md:flex gap-10 ">
        <div className="md:w-8/12 grow">
          <DashbordBoxes />
          <SalesStats />
        </div>
        <div className="md:w-4/12 grow">
          <TopSellingProducts />
        </div>
      </div>
    </>
  );
};

export default Dashbord;
