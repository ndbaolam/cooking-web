import { BsPlus, BsFillLightningFill, BsGearFill }  from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <>
      <div className="fixed float-left left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<FaFire size="28"/>}/>
        <SideBarIcon icon={<BsPlus size="32"/>}/>
        <SideBarIcon icon={<BsFillLightningFill size="20"/>}/>
        <SideBarIcon icon={<FaPoo size="20"/>}/>
      </div>
    </>
  )
};

const SideBarIcon: React.FC<any> = ({ icon, text = 'tooltip' }: any) => (
  <div className="relative flex items-center justify-center 
    h-12 w-12 my-2 shadow-lg bg-gray-800 rounded-full
    text-green-500 hover:bg-green-500
    mx-auto hover:text-white transition-all duration-200 
    ease-linear cursor-pointer group">
    {icon}

    <span className="absolute w-auto p-3 m-2 min-w-max left-14
      rounded-md shadow-md text-white bg-gray-900
      text-xs font-bold transition-all duration-200 scale-0 origin-left group-hover:scale-100">
        {text}
    </span>
  </div>
);
