import React, { useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { LoginDialog } from "./features/login/loginDialog/LoginDialog";

const App: React.FC = () => {
  const [showModalDialog, setShowModalDialog] = useState(false);

  return (
    <>
      {showModalDialog && (
        <ModalDialog
          onClose={() => {
            setShowModalDialog(false);
          }}
        >
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
        Login
      </button>
    </>
  );
};

export default App;
