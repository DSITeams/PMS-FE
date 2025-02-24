import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../stores/slice/authSlice';
import Header from '../../components/header';
import InfoItem from '../../components/info/InfoItem';
import CardInfo from '../../components/info';
import {
  FaArrowDown,
  FaArrowUp,
  FaDoorOpen,
  FaHouse,
  FaRepeat,
} from 'react-icons/fa6';
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='h-screen w-screen flex bg-color'>
      <Sidebar>
        <SidebarItem text='Dashboard' icon={<HomeIcon />} />
        <SidebarItem
          text='Reception'
          icon={<UserIcon />}
          subMenu={[
            { text: 'Check In' },
            { text: 'Check Out' },
            { text: 'Room' },
          ]}
        />
        <SidebarItem
          text='Reservation'
          icon={<DeskIcon />}
          subMenu={[{ text: 'New Reservation' }, { text: 'All Reservation' }]}
        />
        <SidebarItem
          text='Marketing'
          icon={<BarChartIcon />}
          subMenu={[
            { text: 'Corporate' },
            { text: 'Travel Agent' },
            { text: 'Source of Business' },
          ]}
        />
        <SidebarItem text='Night Audit' icon={<BookIcon />} />
        <SidebarItem
          text='Housekeeping'
          icon={<BoxIcon />}
          subMenu={[{ text: 'Room Status' }, { text: 'Room Assignment' }]}
        />
        <SidebarItem
          text='Tools'
          icon={<SettingIcon />}
          subMenu={[{ text: 'User' }, { text: 'Setting' }]}
        />
        <SidebarItem
          text='Report'
          icon={<FileIcon />}
          subMenu={[
            { text: 'Daily Report' },
            { text: 'Monthly Report' },
            { text: 'Yearly Report' },
          ]}
        />
        <SidebarItem
          text='Statictic'
          icon={<ChartIcon />}
          subMenu={[
            { text: 'Daily Statictic' },
            { text: 'Monthly Statictic' },
            { text: 'Yearly Statictic' },
          ]}
        />
        <SidebarItem
          text='Telephone'
          icon={<PhoneIcon />}
          subMenu={[{ text: 'New Telephone' }, { text: 'All Telephone' }]}
        />
        <SidebarItem
          text='Engineering'
          icon={<UserIcon />}
          subMenu={[{ text: 'New Engineering' }, { text: 'All Engineering' }]}
        />
        <SidebarItem
          text='Settings'
          icon={<SettingIcon />}
          subMenu={[{ text: 'New Settings' }, { text: 'All Settings' }]}
        />
        <SidebarItem
          text='Help'
          icon={<QuestionIcon />}
          subMenu={[
            { text: 'New Help' },
            { text: 'All Help' },
            { text: 'FAQ' },
          ]}
        />
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
