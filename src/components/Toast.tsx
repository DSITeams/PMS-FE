// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faExclamationCircle,
//   faCheckCircle,
//   faCircleXmark,
// } from '@fortawesome/free-solid-svg-icons';

// interface ToastProps {
//   message: string;
//   type?: 'success' | 'error' | 'info';
// }

// const Toast = ({ message, type = 'info' }: ToastProps) => {
//   const colors = {
//     success: 'bg-green-500',
//     error: 'bg-red-500',
//     info: 'bg-blue-500',
//   };

//   const icons = {
//     success: faCheckCircle,
//     error: faCircleXmark,
//     info: faExclamationCircle,
//   };

//   return (
//     <div className={`toast ${colors[type]} flex w-lg m-4 p-3 rounded-lg`}>
//       <div className='flex items-center'>
//         <div className='mr-2 text-white'>
//           <FontAwesomeIcon icon={icons[type]} size='lg' />
//         </div>
//         <div className='text-white'>{message}</div>
//       </div>
//     </div>
//   );
// };

// export default Toast;
