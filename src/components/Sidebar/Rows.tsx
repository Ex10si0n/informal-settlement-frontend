import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarRowProps {
  to: string;
  label: string;
  badge?: string;
  badgeColor?: string;
}

const Rows: React.FC = () => {
  const navItems: SidebarRowProps[] = [
    { to: '/', label: 'Home' },
    { to: '/mapping', label: 'Mapping', badge: 'Beta', badgeColor: 'text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300' },
    { to: '/techs', label: 'Techs' },
    { to: '/data', label: 'Data' },
  ];

  return (
    <ul className="space-y-2 font-medium">
      {navItems.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.to}
            className={({ isActive }) => `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
          >
            <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
            {item.badge && (
              <span className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium ${item.badgeColor}`}>
                {item.badge}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Rows;
