import CardDashboard from "../../components/card/CardDashboard";

const Dashboard = () => {

  return (
    <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4 px-8">
      <CardDashboard />
      <CardDashboard />
    </div>
  );
};

export default Dashboard;
