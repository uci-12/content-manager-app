

const ResourceLabel = ({ status }) => {
  return (
    <span className={`tag ml-4 resource-${status}`}>
      {status}
    </span>
  );
};

export default ResourceLabel;