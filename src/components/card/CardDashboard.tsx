import {
    FaDoorOpen,
    FaHouse
  } from 'react-icons/fa6';

import InfoItem from '../info/InfoItem';


const CardDashboard = () => {
  return (
    <div className='w-full mb-3'>
        <div className="rounded-lg overflow-hidden shadow-sm bg-white p-5">
            <div className='flex mb-5'>
                <h3 className='font-bold'>Current</h3>
            </div>
            <div className='flex flex-wrap gap-8 justify-between'>
                <InfoItem title='% Sold' value='116.4 %' icons={FaHouse} />
                <InfoItem title='Sold Room' value='78' icons={FaDoorOpen} />
            </div>
            <div className='flex flex-wrap gap-8 justify-between mt-4'>
                <InfoItem title='% Sold' value='116.4 %' icons={FaHouse} />
                <InfoItem title='Sold Room' value='78' icons={FaDoorOpen} />
            </div>
        </div>
    </div>
  )
}

export default CardDashboard