import Block from "../../assets/icons/Block";
import BookChecklist from "../../assets/icons/BookCheklist";
import KeyIcon from "../../assets/icons/KeyIcon";
import RcIcon from "../../assets/icons/RcIcon";
import RealeseIcon from "../../assets/icons/RealeseIcon";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import ButtonAction from "../../components/button/ButtonAction";
import SideModal from "../../components/modal/SideModal";
import Table from "../../components/table/Table";
import TableTbody from "../../components/table/TableTbody";
import TableThead from "../../components/table/TableThead";

function ExampleTable() {
  // const columns = ["Code", "Date", "From", "To", "Description", "User", "MOD"];

  // const dataMaping = [
  //   {
  //     code: "SR/2010/00011",
  //     date: "02-01-2024",
  //     from: "GENERAL STORE",
  //     to: "HOUSEKEEPING STORE",
  //     description: "KEBUTUHAN ATK",
  //     user: "ADM",
  //     mod: "ADM",
  //   },
  //   {
  //     code: "SR/2010/00012",
  //     date: "03-01-2024",
  //     from: "GENERAL STORE",
  //     to: "HOUSEKEEPING STORE",
  //     description: "KEBUTUHAN ATK",
  //     user: "ADM",
  //     mod: "ADM",
  //   },
  // ];

  // const checkData = () => {
  //   console.log("checked");
  // };

  const actions = [
    {
      title: "Check In",
      color: "text-[#8DBF42]",
      bgColor: "bg-[#8DBF424D]",
      icon: <BookChecklist color="#8DBF42" />,
    },
    {
      title: "Block",
      color: " text-[#FF8905]",
      bgColor: "bg-[#FF89054D]",
      icon: <Block color="#FF8905" />,
    },
    {
      title: "Realese",
      color: "text-[#FB2C36]",
      bgColor: "bg-[#FB2C364D]",
      icon: <BookChecklist color="#fc4952" />,
    },
    {
      title: "RC",
      color: "text-[#F0B101]",
      bgColor: "bg-[#F0B1014D]",
      icon: <RcIcon color="#F0B101" />,
    },
    {
      title: "Creatd Key",
      color: "text-[#C20008]",
      bgColor: "bg-[#C200084D]",
      icon: <KeyIcon color="#C20008" />,
    },
    {
      title: "Refresh",
      color: "text-[#2B7EFE]",
      bgColor: "bg-[#2B7EFE4D]",
      icon: <RefreshIcon color="#2B7EFE" />,
    },
  ];

  return (
      // table component
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

      // button action in reservation
    // <div className="flex gap-3">
    //     {actions.map((action, index) => (
    //       <ButtonAction
    //         key={index}
    //         title={action.title}
    //         className={`${action.bgColor} ${action.color} cursor-pointer`}
    //         icon={action.icon}
    //         type="button"
    //       />
    //     ))}
    //   </div>

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
