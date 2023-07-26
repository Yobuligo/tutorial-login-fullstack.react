import { useState } from "react";

export const useModal = () => {
  const [showModalDialog, setShowModalDialog] = useState(false);

  const show = () => {
    setShowModalDialog(true);
  };

  const hide = () => {
    setShowModalDialog(false);
  };

  return { show, hide };
};
