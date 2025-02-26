import TableTbody from "./TableTbody";
import TableThead from "./TableThead";

const Table = () => {
  const dataChecked = () => {
    console.log("checked");
  };

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

  return (
    <div className="bg-white mt-5 rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">
        <TableThead dataChecked={dataChecked} columns={columns} />
          <TableTbody data={dataMaping} dataChecked={dataChecked} />
        </table>
      </div>
    </div>
  );
};

export default Table;
