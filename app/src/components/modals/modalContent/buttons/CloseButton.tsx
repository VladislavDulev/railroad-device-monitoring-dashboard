import { MouseEvent } from "react";

interface ICloseButton {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton = ({ onClose }: ICloseButton) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default CloseButton;
