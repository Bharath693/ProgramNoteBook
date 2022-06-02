import React, { useState, createContext, useContext } from "react";

const NotificationContext = createContext();
const NotificationActionsContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);
export const useNotificationActionsContext = () =>
  useContext(NotificationActionsContext);

const NotificationContextProvider = (props) => {
  const [NotifiModalOn, setNotifiModal] = useState({ val: false, msg: "" });

  return (
    <NotificationContext.Provider value={NotifiModalOn}>
      <NotificationActionsContext.Provider value={setNotifiModal}>
        {props.children}
      </NotificationActionsContext.Provider>
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;