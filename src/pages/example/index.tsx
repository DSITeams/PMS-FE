import { useState } from 'react';
import Block from '../../assets/icons/Block';
import BookChecklist from '../../assets/icons/BookCheklist';
import KeyIcon from '../../assets/icons/KeyIcon';
import RcIcon from '../../assets/icons/RcIcon';
import RealeseIcon from '../../assets/icons/RealeseIcon';
import RefreshIcon from '../../assets/icons/RefreshIcon';
import ButtonAction from '../../components/button/ButtonAction';
import SideModal from '../../components/modal/SideModal';
import SideMenu from '../../components/sidemenu/SideMenu';
import SideMenuItem from '../../components/sidemenu/SideMenuItem';
import Table from '../../components/table/Table';
import TableTbody from '../../components/table/TableTbody';
import TableThead from '../../components/table/TableThead';
import UserAddIcon from '../../assets/icons/UserAdd';
import TableIcon from '../../assets/icons/Table';
import EditIcon from '../../assets/icons/Edit';
import ArrIcon from '../../assets/icons/Arr';
import WalletIcon from '../../assets/icons/Wallet';
import PrintIcon from '../../assets/icons/Print';
import LockIcon from '../../assets/icons/Lock';
import UserIcon from '../../assets/icons/User';
import AlarmIcon from '../../assets/icons/Alarm';
import TrashIcon from '../../assets/icons/Trash';
import FormDropdown from '../../components/FormDropdown';

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
      title: 'Check In',
      atribute: 'text-[#8DBF42] bg-[#8DBF424D]',
      icon: <BookChecklist color='#8DBF42' />,
    },
    {
      title: 'Block',
      atribute: ' text-[#FF8905] bg-[#FF89054D]',
      icon: <Block color='#FF8905' />,
    },
    {
      title: 'Realese',
      atribute: 'text-[#FB2C36] bg-[#FB2C364D]',
      icon: <BookChecklist color='#fc4952' />,
    },
    {
      title: 'RC',
      atribute: 'text-[#F0B101] bg-[#F0B1014D]',
      icon: <RcIcon color='#F0B101' />,
    },
    {
      title: 'Creatd Key',
      atribute: 'text-[#C20008] bg-[#C200084D]',
      icon: <KeyIcon color='#C20008' />,
    },
    {
      title: 'Refresh',
      atribute: 'text-[#2B7EFE] bg-[#2B7EFE4D]',
      icon: <RefreshIcon color='#2B7EFE' />,
    },
  ];

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (title: string) => {
    setActiveItem(title);
  };

  const menuItems = [
    {
      title: 'Reservation List',
      icon: (color: string) => <TableIcon color={color} />,
    },
    {
      title: 'Add Reservation',
      icon: (color: string) => <UserAddIcon color={color} />,
    },
    {
      title: 'Edit Reservation',
      icon: (color: string) => <EditIcon color={color} />,
    },
    {
      title: 'Room Allocation',
      icon: (color: string) => <ArrIcon color={color} />,
    },
    { title: 'Deposit', icon: (color: string) => <WalletIcon color={color} /> },
    { title: 'Print', icon: (color: string) => <PrintIcon color={color} /> },
    {
      title: 'Reservation Log',
      icon: (color: string) => <LockIcon color={color} />,
    },
    { title: 'Profile', icon: (color: string) => <UserIcon color={color} /> },
    {
      title: 'Post Date',
      icon: (color: string) => <AlarmIcon color={color} />,
    },
    {
      title: 'Cancel Reservation',
      icon: (color: string) => <TrashIcon color={color} />,
    },
  ];

  const handleSelection = (selectedItems: string[]) => {
    console.log('Selected Items:', selectedItems);
  };

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

    <div>
      <SideModal width='sm:max-w-[1000px]'>
        <div className='flex h-full flex-col py-6 px-4 sm:px-6'>
          <h2 className='text-base font-semibold text-gray-900'>Panel title</h2>
          <div className='relative mt-6 flex-1 overflow-y-auto'>
            <p>Isi konten panel</p>
          </div>
        </div>
      </SideModal>

      <div className='flex gap-3'>
        {actions.map((action, index) => (
          <ButtonAction
            key={index}
            title={action.title}
            className={`${action.atribute} cursor-pointer`}
            icon={action.icon}
            type='button'
          />
        ))}
      </div>

      <SideMenu>
        {menuItems.map((item) => (
          <SideMenuItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            isActive={activeItem === item.title}
            onClick={() => handleClick(item.title)}
          />
        ))}
      </SideMenu>
      <FormDropdown
        title='Multi Select Dropdown'
        options={[
          'All',
          'Car Park View',
          'Double Bed',
          'King Bed',
          'Non Smoking Room',
          'Queen Bed',
          'Smoking Room',
        ]}
        multiSelect={true}
        onSelect={handleSelection}
      />

      <FormDropdown
        title='Single Select Dropdown'
        options={[
          'All',
          'Car Park View',
          'Double Bed',
          'King Bed',
          'Non Smoking Room',
          'Queen Bed',
          'Smoking Room',
        ]}
        onSelect={handleSelection}
      />
    </div>
  );
}

export default ExampleTable;
