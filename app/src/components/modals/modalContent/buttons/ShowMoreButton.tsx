import { ReactNode, useState } from "react";
import IDeviceBarrierMessageBatch from "../../../../constants/interfaces/IDeviceBarrierMessageBatch";
import IDeviceBarrierOpenCloseTimeBatch from "../../../../constants/interfaces/IDeviceBarrierOpenCloseTimeBatch";
import { StringConstants } from "../../../../constants/types/StringConstants";

interface IShowMoreButton {
  items:
    | IDeviceBarrierMessageBatch["messages"]
    | IDeviceBarrierOpenCloseTimeBatch["proRailBarrierOpenCloseTime"];
  maxItems: number;
  renderText: (
    item:
      | IDeviceBarrierMessageBatch["messages"]
      | IDeviceBarrierOpenCloseTimeBatch["proRailBarrierOpenCloseTime"],
    index: number
  ) => ReactNode;
}

const ShowMoreButton = ({ items, maxItems, renderText }: IShowMoreButton) => {
  const { SHOW_LESS, SHOW_MORE } = StringConstants;

  const [showAll, setShowAll] = useState(false);

  const itemsToDisplay = showAll ? items : items.slice(0, maxItems);

  return (
    <div>
      {itemsToDisplay.map((item: any, index: number) =>
        renderText(item, index)
      )}

      {items.length > maxItems && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs uppercase mt-2  text-blue-500 "
        >
          {showAll ? SHOW_LESS : SHOW_MORE}
        </button>
      )}
    </div>
  );
};

export default ShowMoreButton;
