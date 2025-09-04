import { FaTachometerAlt, FaHourglassHalf, FaPlayCircle, FaCheckCircle, FaUser, FaWallet, FaHistory } from 'react-icons/fa';

interface DoctorSidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  sidebarOpen: boolean;
}

const navItems = [
  { name: 'Dashboard', icon: <FaTachometerAlt />, view: 'dashboard' },
  { name: 'Pending Cases', icon: <FaHourglassHalf />, view: 'pending' },
  // { name: 'Active Cases', icon: <FaPlayCircle />, view: 'active' },
  { name: 'Completed Cases', icon: <FaCheckCircle />, view: 'completed' },
  { name: 'Payment', icon: <FaWallet />, view: 'payment' },
  { name: 'History', icon: <FaHistory />, view: 'history' },
  { name: 'Profile', icon: <FaUser />, view: 'profile' },
];

const DoctorSidebar: React.FC<DoctorSidebarProps> = ({ currentView, onViewChange, sidebarOpen }) => (
  <div 
    className={`${sidebarOpen ? 'w-64' : 'w-16'} fixed lg:static lg:inset-0 z-30 bg-medical-sidebar transition-all duration-300 ease-in-out group hover:w-64`}
  >
    <div className="flex flex-col h-full">
      {/* Logo/Brand */}
      <div className="flex items-center h-16 border-b border-medical-gray-600 px-4">
        <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">CT</span>
        </div>
      </div>

      {/* Navigation Icons */}
      <nav className="flex-1">
        <ul className="py-4">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className={`flex items-center px-4 py-3 mb-2 cursor-pointer transition-colors whitespace-nowrap
                ${currentView === item.view 
                  ? 'text-medical-blue bg-medical-blue/10' 
                  : 'text-white hover:text-medical-blue hover:bg-medical-blue/5'}`}
              onClick={() => onViewChange(item.view)}
            >
              <div className="text-xl">{item.icon}</div>
              <span className={`ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentView !== item.view ? 'text-white' : ''}`}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default DoctorSidebar;
