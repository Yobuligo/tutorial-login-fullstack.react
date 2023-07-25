import React, { useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { LoginDialog } from "./features/login/loginDialog/LoginDialog";

const App: React.FC = () => {
  const [showModalDialog, setShowModalDialog] = useState(false);
  return (
    <>
      {showModalDialog && (
        <ModalDialog>
          <LoginDialog
            onLogin={() => {
              setShowModalDialog(false);
            }}
          />
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
