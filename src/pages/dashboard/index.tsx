import ArrIcon from '../../assets/icons/Arr';
import BedIcon from '../../assets/icons/Bed';
import ChartIcon from '../../assets/icons/Chart';
import HomeIcon from '../../assets/icons/Home';
import InIcon from '../../assets/icons/In';
import OutIcon from '../../assets/icons/Out';
import TableIcon from '../../assets/icons/Table';
import WalletIcon from '../../assets/icons/Wallet';
import CardDashboard from '../../components/card/CardDashboard';
import InfoItem from '../../components/info/InfoItem';
import Chart from '../../components/Chart';

const Dashboard = () => {
  const data = [
    { day: 1, value: 5000 },
    { day: 2, value: 7000 },
    { day: 3, value: 6000 },
    { day: 4, value: 8000 },
    { day: 5, value: 9000 },
    { day: 6, value: 4000 },
    { day: 7, value: 3000 },
  ];

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <div className='flexmd:flex-col lg:flex-row xl:flex-row gap-4'>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4'>
        <CardDashboard
          title={'Current'}
          useDate
          isRangePicker={false}
          content={
            <>
              <div className='flex flex-wrap gap-8 w-full justify-between'>
                <div className='flex flex-col'>
                  <InfoItem
                    title='% Sold'
                    value='116.4 %'
                    icons={<HomeIcon color='#1b55e2' />}
                  />
                  <InfoItem
                    title='Expected Arrival'
                    value='20'
                    icons={<InIcon color='#1b55e2' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <InfoItem
                    title='Sold Room'
                    value='78'
                    icons={<BedIcon color='#1b55e2' />}
                  />
                  <InfoItem
                    title='Expected Departure'
                    value='0'
                    icons={<OutIcon color='#1b55e2' />}
                  />
                </div>
              </div>
            </>
          }
        />
        <CardDashboard
          title={'Tonight'}
          useDate={false}
          content={
            <>
              <div className='flex flex-wrap gap-8 w-full justify-between'>
                <div className='flex flex-col'>
                  <InfoItem
                    title='% Sold'
                    value='146.3 %'
                    icons={<HomeIcon color='#1b55e2' />}
                  />
                  <InfoItem
                    title='ARR'
                    value='535,867'
                    icons={<ArrIcon color='#1b55e2' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <InfoItem
                    title='Sold Room'
                    value='98'
                    icons={<BedIcon color='#1b55e2' />}
                  />
                  <InfoItem
                    title='Room Revenue'
                    value='52,515,18'
                    icons={<WalletIcon color='#1b55e2' />}
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4'>
        <CardDashboard
          title={'Outlet Revenue'}
          useDate
          isRangePicker={true}
          icon={<TableIcon w={9} h={9} color='#ffffff' />}
          content={
            <>
              <Chart data={data} daysOfWeek={daysOfWeek} />
            </>
          }
        />
        <CardDashboard
          title={'Tonight'}
          useDate
          isRangePicker={false}
          icon={<ChartIcon w={9} h={9} color='#ffffff' />}
          content={
            <>
              <div className='flex flex-wrap gap-8 justify-between'>
                <InfoItem
                  title='% Sold'
                  value='116.4 %'
                  icons={<HomeIcon color='#1b55e2' />}
                />
                <InfoItem
                  title='Sold Room'
                  value='78'
                  icons={<BedIcon color='#1b55e2' />}
                />
              </div>
              <div className='flex flex-wrap gap-8 justify-between mt-4'>
                <InfoItem
                  title='Expected Arrival'
                  value='116.4 %'
                  icons={<InIcon color='#1b55e2' />}
                />
                <InfoItem
                  title='Expected Departure'
                  value='78'
                  icons={<OutIcon color='#1b55e2' />}
                />
              </div>
            </>
          }
        />
      </div>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4'>
        <CardDashboard
          title={'Tonight'}
          useDate={false}
          content={
            <>
              <div className='flex flex-wrap gap-8 justify-between'>
                <InfoItem
                  title='% Sold'
                  value='116.4 %'
                  icons={<HomeIcon color='#1b55e2' />}
                />
                <InfoItem
                  title='Sold Room'
                  value='78'
                  icons={<BedIcon color='#1b55e2' />}
                />
              </div>
              <div className='flex flex-wrap gap-8 justify-between mt-4'>
                <InfoItem
                  title='Expected Arrival'
                  value='116.4 %'
                  icons={<InIcon color='#1b55e2' />}
                />
                <InfoItem
                  title='Expected Departure'
                  value='78'
                  icons={<OutIcon color='#1b55e2' />}
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
