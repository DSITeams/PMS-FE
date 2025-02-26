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

const Dashboard = () => {
  return (
    <div className='flexmd:flex-col lg:flex-row xl:flex-row gap-4'>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4 px-8'>
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
                    icons={<HomeIcon isActive />}
                  />
                  <InfoItem
                    title='Expected Arrival'
                    value='20'
                    icons={<InIcon isActive />}
                  />
                </div>
                <div className='flex flex-col'>
                  <InfoItem
                    title='Sold Room'
                    value='78'
                    icons={<BedIcon isActive />}
                  />
                  <InfoItem
                    title='Expected Departure'
                    value='0'
                    icons={<OutIcon isActive />}
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
                    icons={<HomeIcon isActive />}
                  />
                  <InfoItem
                    title='ARR'
                    value='535,867'
                    icons={<ArrIcon isActive />}
                  />
                </div>
                <div className='flex flex-col'>
                  <InfoItem
                    title='Sold Room'
                    value='98'
                    icons={<BedIcon isActive />}
                  />
                  <InfoItem
                    title='Room Revenue'
                    value='52,515,18'
                    icons={<WalletIcon isActive />}
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4 px-8'>
        <CardDashboard
          title={'Current'}
          useDate
          isRangePicker={true}
          icon={<TableIcon w={9} h={9} />}
          content={
            <>
              <div className='flex flex-wrap gap-8 justify-between'>
                <InfoItem
                  title='% Sold'
                  value='116.4 %'
                  icons={<HomeIcon isActive />}
                />
                <InfoItem
                  title='Sold Room'
                  value='78'
                  icons={<BedIcon isActive />}
                />
              </div>
              <div className='flex flex-wrap gap-8 justify-between mt-4'>
                <InfoItem
                  title='Expected Arrival'
                  value='116.4 %'
                  icons={<InIcon isActive />}
                />
                <InfoItem
                  title='Expected Departure'
                  value='78'
                  icons={<OutIcon isActive />}
                />
              </div>
            </>
          }
        />
        <CardDashboard
          title={'Tonight'}
          useDate
          isRangePicker={false}
          icon={<ChartIcon w={9} h={9} />}
          content={
            <>
              <div className='flex flex-wrap gap-8 justify-between'>
                <InfoItem
                  title='% Sold'
                  value='116.4 %'
                  icons={<HomeIcon isActive />}
                />
                <InfoItem
                  title='Sold Room'
                  value='78'
                  icons={<BedIcon isActive />}
                />
              </div>
              <div className='flex flex-wrap gap-8 justify-between mt-4'>
                <InfoItem
                  title='Expected Arrival'
                  value='116.4 %'
                  icons={<InIcon isActive />}
                />
                <InfoItem
                  title='Expected Departure'
                  value='78'
                  icons={<OutIcon isActive />}
                />
              </div>
            </>
          }
        />
      </div>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4 px-8'>
        <CardDashboard
          title={'Tonight'}
          useDate={false}
          content={
            <>
              <div className='flex flex-wrap gap-8 justify-between'>
                <InfoItem
                  title='% Sold'
                  value='116.4 %'
                  icons={<HomeIcon isActive />}
                />
                <InfoItem
                  title='Sold Room'
                  value='78'
                  icons={<BedIcon isActive />}
                />
              </div>
              <div className='flex flex-wrap gap-8 justify-between mt-4'>
                <InfoItem
                  title='Expected Arrival'
                  value='116.4 %'
                  icons={<InIcon isActive />}
                />
                <InfoItem
                  title='Expected Departure'
                  value='78'
                  icons={<OutIcon isActive />}
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
