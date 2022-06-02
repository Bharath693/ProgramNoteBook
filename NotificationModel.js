import React from "react";
import "./modal.css";
import {
  useNotificationActionsContext,
  useNotificationContext,
} from "./useModal";
export const NotificationModal = (props) => {
  const isGlobalSpinnerOn = useNotificationContext();
  const setNotifi = useNotificationActionsContext();
  const closeModal = () => {
    setNotifi({ val: false, msg: "" });
  };
  
  return isGlobalSpinnerOn.val ? (
    <div className="notification-modal">
      <div className="modal-body">
        <div className="d-flex align-items-center justify-content-end border-bottom w-100 px-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            onClick={closeModal}
            fill="currentColor"
            className="cursor-pointer bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </div>
        <div className="d-flex flex-column align-items-center mt-2">
          <div className="text-center">
            <strong> {isGlobalSpinnerOn.msg}</strong>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};