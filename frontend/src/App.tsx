import React, { useState } from "react";
import "./App.css";
import { LoginDialog } from "./features/login/loginDialog/LoginDialog";
import { ModalDialog } from "./features/modalDialog/ModalDialog";

const App: React.FC = () => {
  const [showModalDialog, setShowModalDialog] = useState(false);
  return (
    <>
      {showModalDialog && (
        <ModalDialog onClose={() => setShowModalDialog(false)}>
          <LoginDialog />
        </ModalDialog>
      )}
      <button
        onClick={() => {
          console.log("Display modal dialog");
          setShowModalDialog(true);
        }}
      >
        This a a test button
      </button>
    </>
  );
};

export default App;
