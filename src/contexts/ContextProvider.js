import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDateRange } from '../methods/getDateRange';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#1E4DB7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ deals, setDeals ] = useState([]);
  const [ skeletonUp, setSkeletonUp ] = useState(true);
  const [ userRole, setUserRole ] = useState("");

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };
  const handleSkeleton = (state) => setSkeletonUp(state);
  
  const dateDay = getDateRange('today');
  const dateWeek = getDateRange('week');
  const dateMonth = getDateRange('month');
  const dateYear = getDateRange('year');

  // for sending requests at once 
  const dateRanges = [dateDay, dateWeek, dateMonth];

  useEffect(() => {
    const logCheck = localStorage.getItem('nomalyticsTokenAuth');
    
    if (logCheck) { setLoggedIn(true); } else { setLoggedIn(false) }

  }, []);

  const handleLogIn = (role) => {
    setUserRole(role.userRole)
    localStorage.setItem('nomalyticsTokenAuth', JSON.stringify(role));
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    localStorage.removeItem('nomalyticsTokenAuth');
    setLoggedIn(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ userRole, skeletonUp, handleSkeleton, deals, setDeals, dateRanges, isLoggedIn, handleLogIn, handleLogOut, currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
