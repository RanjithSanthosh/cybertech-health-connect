import React from 'react';
import { FiFolder, FiMoreVertical } from 'react-icons/fi';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:translate-x-0 lg:static lg:inset-0 z-30 w-16 bg-medical-sidebar transition-transform duration-300 ease-in-out lg:w-16`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-medical-gray-600">
          <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">CT</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col py-4">
          <button className="flex items-center justify-center h-12 mx-2 mb-2 rounded transition-colors bg-medical-blue text-white" title="Active Studies">
            <FiFolder className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center h-12 mx-2 mb-2 rounded text-medical-gray-300 hover:bg-medical-sidebar-hover hover:text-white transition-colors">
            <FiMoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
