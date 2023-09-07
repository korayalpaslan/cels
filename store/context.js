import { createContext, useState } from "react";

const NotificationContext = createContext({
  toggleMenuHandler: () => {},
});

export const NotificationContextProvider = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  const context = {
    toggleMenu: toggleMenu,
    toggleMenuHandler: toggleMenuHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
