import { createContext, useState } from "react";

const NotificationContext = createContext({
  toggleMenuHandler: () => {},
  checkAnswerHandler: () => {}
});

export const NotificationContextProvider = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  const checkAnswerHandler = () => {
    setToggleAnswer((prevState) => !prevState);
  };

  const context = {
    toggleMenu: toggleMenu,
    toggleAnswer: toggleAnswer,
    toggleMenuHandler: toggleMenuHandler,
    checkAnswerHandler: checkAnswerHandler
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
