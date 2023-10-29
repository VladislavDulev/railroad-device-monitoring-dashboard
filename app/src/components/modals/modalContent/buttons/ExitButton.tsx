import { MouseEvent } from "react";
import { X } from "react-feather";

interface IExitButton {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ExitButton = ({ onClose }: IExitButton) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-2 right-2 p-5 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
    >
      <X />
    </button>
  );
};

export default ExitButton;
