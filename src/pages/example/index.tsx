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
    <div className="bg-white mt-5 rounded-lg">
      <Table>
        <TableThead dataChecked={checkData} columns={columns} />
        <TableTbody
          columns={columns}
          data={dataMaping}
          dataChecked={checkData}
        />
      </Table>
    </div>
  );
}

export default ExampleTable;
