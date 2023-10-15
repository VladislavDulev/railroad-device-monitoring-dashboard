import IDeviceMeta from "../../../constants/interfaces/IDeviceMeta";

interface IMetaContent {
  metaContent: IDeviceMeta;
}

const MetaContent = ({ metaContent }: IMetaContent) => {
  return (
    <div>
      <p>Barrier ID: {metaContent.barrierId}</p>
    </div>
  );
};

export default MetaContent;
