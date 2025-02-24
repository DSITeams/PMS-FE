import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header';
import { useDispatch } from 'react-redux';
import HomeIcon from '../../assets/icons/Home';
import UserIcon from '../../assets/icons/User';
import DeskIcon from '../../assets/icons/Desk';
import BarChartIcon from '../../assets/icons/BarChart';
import BookIcon from '../../assets/icons/Book';
import BoxIcon from '../../assets/icons/Box';
import SettingIcon from '../../assets/icons/Setting';
import FileIcon from '../../assets/icons/File';
import ChartIcon from '../../assets/icons/Chart';
import PhoneIcon from '../../assets/icons/Phone';
import QuestionIcon from '../../assets/icons/Question';
import { logout } from '../../stores/slice/authSlice';
import SidebarItem from '../../components/sidebar/SidebarItem';
import NavMobile from '../../components/navbar/NavMobile';
import { useState } from 'react';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { text: 'Dashboard', icon: <HomeIcon /> },
    {
      text: 'Reception',
      icon: <UserIcon />,
      subMenu: ['Check In', 'Check Out', 'Room'],
    },
    {
      text: 'Reservation',
      icon: <DeskIcon />,
      subMenu: ['New Reservation', 'All Reservation'],
    },
    {
      text: 'Marketing',
      icon: <BarChartIcon />,
      subMenu: ['Corporate', 'Travel Agent', 'Source of Business'],
    },
    { text: 'Night Audit', icon: <BookIcon /> },
    {
      text: 'Housekeeping',
      icon: <BoxIcon />,
      subMenu: ['Room Status', 'Room Assignment'],
    },
    { text: 'Tools', icon: <SettingIcon />, subMenu: ['User', 'Setting'] },
    {
      text: 'Report',
      icon: <FileIcon />,
      subMenu: ['Daily Report', 'Monthly Report', 'Yearly Report'],
    },
    {
      text: 'Statistic',
      icon: <ChartIcon />,
      subMenu: ['Daily Statistic', 'Monthly Statistic', 'Yearly Statistic'],
    },
    {
      text: 'Telephone',
      icon: <PhoneIcon />,
      subMenu: ['New Telephone', 'All Telephone'],
    },
    {
      text: 'Engineering',
      icon: <UserIcon />,
      subMenu: ['New Engineering', 'All Engineering'],
    },
    {
      text: 'Settings',
      icon: <SettingIcon />,
      subMenu: ['New Settings', 'All Settings'],
    },
    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredSidebarItems = sidebarItems.filter((item) => {
    if (item.subMenu) {
      return (
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subMenu.some((subItem) =>
          subItem.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    return item.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className='flex justify-normal bg-color'>
      <div className='flex h-screen'>
        <Sidebar onSearch={handleSearch}>
          {filteredSidebarItems.map(({ text, icon, subMenu }) => (
            <SidebarItem
              key={text}
              text={text}
              icon={icon}
              subMenu={subMenu?.map((text) => ({ text }))}
            />
          ))}
        </Sidebar>
      </div>
      <div className='flex-1 h-[100%]'>
        <NavMobile className='sm:block md:block lg:hidden xl:hidden mb-5' />
        <Header
          title={'Dashboard'}
          subtitle={'Dashboard'}
          profilePict={'/src/assets/images/test.jpg'}
          name={'Windah Batubara'}
          position={'Administrator'}
          changePassword={() => console.log('edit password')}
          logout={handleLogout}
        />

        {/* content */}
           <Outlet />
        {/* end content */}
      </div>
    </div>
  );
};

export default Layout;