import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../stores/slice/authSlice';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarItem from '../../components/sidebar/SidebarItem';
import HomeIcon from '../../assets/icons/Home';
import UserIcon from '../../assets/icons/User';
import QuestionIcon from '../../assets/icons/Question';
import SettingIcon from '../../assets/icons/Setting';
import PhoneIcon from '../../assets/icons/Phone';
import ChartIcon from '../../assets/icons/Chart';
import FileIcon from '../../assets/icons/File';
import BoxIcon from '../../assets/icons/Box';
import BookIcon from '../../assets/icons/Book';
import BarChartIcon from '../../assets/icons/BarChart';
import DeskIcon from '../../assets/icons/Desk';
import {
  FaHouse,
  FaArrowDown,
  FaDoorOpen,
  FaArrowUp,
  FaRepeat,
} from 'react-icons/fa6';
import CardInfo from '../../components/info';
import InfoItem from '../../components/info/InfoItem';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
    {
      text: 'Help',
      icon: <QuestionIcon />,
      subMenu: ['New Help', 'All Help', 'FAQ'],
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='h-screen w-screen flex bg-color'>
      <Sidebar>
        {sidebarItems.map(({ text, icon, subMenu }) => (
          <SidebarItem
            key={text}
            text={text}
            icon={icon}
            subMenu={subMenu?.map((text) => ({ text }))}
          />
        ))}
      </Sidebar>
      <div className='flex-col w-screen h-screen'>
        <Header
          title={'Dashboard'}
          subtitle={'Dashboard'}
          profilePict={'/src/assets/images/test.jpg'}
          name={'Windah Batubara'}
          position={'Administrator'}
          changePassword={() => console.log('edit password')}
          logout={handleLogout}
        />
        <div className='flex space-x-4 p-8'>
          <CardInfo
            title={'Current'}
            dateRange='Last 30 days'
            content={
              <div className='flex justify-between'>
                <div className='flex-col mr-50'>
                  <div className='mb-6'>
                    <InfoItem title='% Sold' value='116.4 %' icons={FaHouse} />
                  </div>
                  <InfoItem
                    title='Expected Arrival'
                    value='20'
                    icons={FaArrowDown}
                  />
                </div>
                <div className='flex-col mb-4'>
                  <div className='mb-6'>
                    <InfoItem title='Sold Room' value='78' icons={FaDoorOpen} />
                  </div>
                  <InfoItem
                    title='Expected Departure'
                    value='0'
                    icons={FaArrowUp}
                  />
                </div>
              </div>
            }
          />
          <CardInfo
            title={'Tonight'}
            content={
              <div className='flex justify-between'>
                <div className='flex-col mr-50'>
                  <div className='mb-6'>
                    <InfoItem title='% Sold' value='146.3 %' icons={FaHouse} />
                  </div>
                  <InfoItem title='ARR' value='535,867' icons={FaRepeat} />
                </div>
                <div className='flex-col mb-4'>
                  <div className='mb-6'>
                    <InfoItem title='Sold Room' value='98' icons={FaDoorOpen} />
                  </div>
                  <InfoItem
                    title='Room Revenue'
                    value='52,515,518'
                    icons={FaArrowUp}
                  />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
