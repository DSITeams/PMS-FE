import Card from '../../components/card/Card';
import CardDashboard from '../../components/card/CardDashboard';
import Table from '../../components/table/Table';

const Dashboard = () => {
  return (
    // <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-5'>
    //   {/* <CardDashboard />
    //   <CardDashboard /> */}
    // </div>
    <div>
      <Card>
        <p>Halaman Table</p>
      </Card>
      <Table />
    </div>

    // <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4 px-8">
    //   <CardInfo
    //     title={"Current"}
    //     dateRange="Last 30 days"
    //     content={
    //       <div className="flex justify-between">
    //         <div className="flex-col mr-50">
    //           <div className="mb-6">
    //             <InfoItem title="% Sold" value="116.4 %" icons={FaHouse} />
    //           </div>
    //           <InfoItem
    //             title="Expected Arrival"
    //             value="20"
    //             icons={FaArrowDown}
    //           />
    //         </div>
    //         <div className="flex-col mb-4">
    //           <div className="mb-6">
    //             <InfoItem title="Sold Room" value="78" icons={FaDoorOpen} />
    //           </div>
    //           <InfoItem
    //             title="Expected Departure"
    //             value="0"
    //             icons={FaArrowUp}
    //           />
    //         </div>
    //       </div>
    //     }
    //   />
    //   <CardInfo
    //     title={"Tonight"}
    //     content={
    //       <div className="flex justify-between">
    //         <div className="flex-col mr-50">
    //           <div className="mb-6">
    //             <InfoItem title="% Sold" value="146.3 %" icons={FaHouse} />
    //           </div>
    //           <InfoItem title="ARR" value="535,867" icons={FaRepeat} />
    //         </div>
    //         <div className="flex-col mb-4">
    //           <div className="mb-6">
    //             <InfoItem title="Sold Room" value="98" icons={FaDoorOpen} />
    //           </div>
    //           <InfoItem
    //             title="Room Revenue"
    //             value="52,515,518"
    //             icons={FaArrowUp}
    //           />
    //         </div>
    //       </div>
    //     }
    //   />
    // </div>
  );
};

export default Dashboard;
