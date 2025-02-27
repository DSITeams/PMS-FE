import SideModal from "../../components/modal/SideModal";
import Table from "../../components/table/Table";
import TableTbody from "../../components/table/TableTbody";
import TableThead from "../../components/table/TableThead";

function ExampleTable() {
  const columns = ["Code", "Date", "From", "To", "Description", "User", "MOD"];

  const dataMaping = [
    {
      code: "SR/2010/00011",
      date: "02-01-2024",
      from: "GENERAL STORE",
      to: "HOUSEKEEPING STORE",
      description: "KEBUTUHAN ATK",
      user: "ADM",
      mod: "ADM",
    },
    {
      code: "SR/2010/00012",
      date: "03-01-2024",
      from: "GENERAL STORE",
      to: "HOUSEKEEPING STORE",
      description: "KEBUTUHAN ATK",
      user: "ADM",
      mod: "ADM",
    },
  ];

  const checkData = () => {
    console.log("checked");
  };

  return (
    // <div className="bg-white mt-5 rounded-lg">
    //   <Table>
    //     <TableThead dataChecked={checkData} columns={columns} />
    //     <TableTbody
    //       columns={columns}
    //       data={dataMaping}
    //       dataChecked={checkData}
    //     />
    //   </Table>
    // </div>
    <div>
      <SideModal width="sm:max-w-[1000px]">
        <div className="flex h-full flex-col py-6 px-4 sm:px-6">
          <h2 className="text-base font-semibold text-gray-900">Panel title</h2>
          <div className="relative mt-6 flex-1 overflow-y-auto">
            <p>Isi konten panel</p>
          </div>
        </div>
      </SideModal>
    </div>
  );
}

export default ExampleTable;
