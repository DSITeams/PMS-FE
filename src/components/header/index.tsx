import HeaderTitle from './HeaderTitle';
import HeaderProfile from './HeaderProfile';

interface HeaderProps {
  title: string;
  subtitle: string;
  profilePict: string;
  name: string;
  position: string;
  changePassword: () => void;
  logout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  profilePict,
  name,
  position,
  changePassword,
  logout,
}) => {
  return (
    <div className='flex items-center justify-between h-30'>
      <HeaderTitle title={title} subtitle={subtitle} />
      <HeaderProfile
        profilePict={profilePict}
        name={name}
        position={position}
        changePassword={changePassword}
        logout={logout}
      />
    </div>
  );
};

export default Header;
