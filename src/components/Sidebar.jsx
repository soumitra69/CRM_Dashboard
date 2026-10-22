import React, { useState } from 'react';
import { NAV_ITEMS } from '../data/dashboardData';

export default function Sidebar({
  activeMenu,
  activeSubMenu,
  onSelectMenu,
  onSelectSubMenu,
  isOpen,
  onClose,
  onLogout,
}) {
  const [openMenus, setOpenMenus] = useState({ dashboard: false });
  const [openNested, setOpenNested] = useState({
    'primary-level': false,
    'middle-level': false,
  });

  const toggleMenu = (menuId) => {
    onSelectMenu(menuId);
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const toggleNested = (nestedId, e) => {
    e.stopPropagation();
    setOpenNested((prev) => ({
      ...prev,
      [nestedId]: !prev[nestedId],
    }));
  };

  const handleSubItemClick = (parentId, subItem, e) => {
    e.stopPropagation();
    onSelectMenu(parentId);
    onSelectSubMenu(subItem);
    if (window.innerWidth <= 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop overlay for mobile & tablet */}
      <div
        className={`sidebar-backdrop ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="side-nav glass-panel">
          <div className="sidebar-top-row">
            <div
              className="sidebar-brand"
              onClick={() => {
                onSelectMenu('dashboard');
                onSelectSubMenu(null);
              }}
            >
              <img src="./Assets/Logo 1 (1).png" alt="EduFlow Logo" />
            </div>
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          <ul className="nav-list">
            {NAV_ITEMS.map((item, idx) => {
              const isMenuActive = activeMenu === item.id;
              const isExpanded = !!openMenus[item.id];

              return (
                <li
                  key={item.id}
                  className="nav-item-wrapper"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <button
                    type="button"
                    className={`nav-label ${isMenuActive ? 'active-nav-label' : ''}`}
                    onClick={() => toggleMenu(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span className="nav-label-left">
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt=""
                          className={isMenuActive ? 'icon-active' : ''}
                        />
                      )}
                      <span>{item.label}</span>
                    </span>
                    <span className={`nav-chevron ${isExpanded ? 'rotated' : ''}`}>
                      ▾
                    </span>
                  </button>

                  <div className={`submenu-collapse ${isExpanded ? 'expanded' : ''}`}>
                    <ul className="nav-submenu glass-submenu">
                      {item.children.map((sub) => {
                        if (sub.nested) {
                          const isNestedOpen = !!openNested[sub.id];
                          return (
                            <li key={sub.id} className="nested-group">
                              <button
                                type="button"
                                className={`nav-nested-label ${isNestedOpen ? 'open' : ''}`}
                                onClick={(e) => toggleNested(sub.id, e)}
                              >
                                <span className="nav-label-left">
                                  {sub.icon && <img src={sub.icon} alt="" />}
                                  <span>{sub.label}</span>
                                </span>
                                <span
                                  className={`nav-chevron small ${isNestedOpen ? 'rotated' : ''}`}
                                >
                                  ▾
                                </span>
                              </button>
                              <div
                                className={`submenu-collapse ${
                                  isNestedOpen ? 'expanded' : ''
                                }`}
                              >
                                <ul className="nested-submenu-list">
                                  {sub.nested.map((term) => (
                                    <li
                                      key={term.id}
                                      className={`p-p ${
                                        activeSubMenu?.id === term.id ? 'active-sub' : ''
                                      }`}
                                      onClick={(e) => handleSubItemClick(item.id, term, e)}
                                    >
                                      {term.icon && <img src={term.icon} alt="" />}
                                      <span>{term.label}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          );
                        }

                        return (
                          <li
                            key={sub.id}
                            className={`submenu-item ${
                              activeSubMenu?.id === sub.id ? 'active-sub' : ''
                            }`}
                            onClick={(e) => handleSubItemClick(item.id, sub, e)}
                          >
                            {sub.icon && <img src={sub.icon} alt="" />}
                            <span>{sub.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="sidebar-footer">
            <button type="button" className="logout-btn" onClick={onLogout}>
              <img src="./Assets/Logout.png" alt="" />
              <span>Log Out</span>
            </button>

            <div className="user-profile">
              <div className="user-avatar">
                <span>RG</span>
              </div>
              <div className="user-info">
                <h6>Ryan George</h6>
                <p>ryan.george@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
