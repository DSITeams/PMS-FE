interface HomeIconProps {
  color?: string;
  w?: number;
  h?: number;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color, w = 6, h = 6 }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} text-[${color}]`}
    >
      <path
        d='M12.7068 2.29303L21.7068 11.293C22.3368 11.923 21.8908 13 20.9998 13H19.9998V19C19.9998 19.7957 19.6837 20.5587 19.1211 21.1214C18.5585 21.684 17.7954 22 16.9998 22H15.9998V15C15.9998 14.2348 15.7075 13.4985 15.1825 12.9418C14.6576 12.385 13.9397 12.0499 13.1758 12.005L12.9998 12H10.9998C10.2041 12 9.44108 12.3161 8.87847 12.8787C8.31587 13.4413 7.99979 14.2044 7.99979 15V22H6.99979C6.20415 22 5.44108 21.684 4.87847 21.1214C4.31587 20.5587 3.99979 19.7957 3.99979 19V13H2.99979C2.10979 13 1.66279 11.923 2.29279 11.293L11.2928 2.29303C11.4803 2.10556 11.7346 2.00024 11.9998 2.00024C12.265 2.00024 12.5193 2.10556 12.7068 2.29303ZM12.9998 14C13.265 14 13.5194 14.1054 13.7069 14.2929C13.8944 14.4805 13.9998 14.7348 13.9998 15V22H9.99979V15C9.99983 14.7551 10.0898 14.5187 10.2525 14.3357C10.4153 14.1526 10.6395 14.0357 10.8828 14.007L10.9998 14H12.9998Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default HomeIcon;
