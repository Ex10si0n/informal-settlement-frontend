import React, { useState, useEffect, useRef } from 'react';
import ShowButton from './ShowButton.tsx';
import Rows from './Rows.tsx';

const Sidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      <ShowButton toggleSidebar={toggleSidebar} />
      <aside
        id="cta-button-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Rows />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
