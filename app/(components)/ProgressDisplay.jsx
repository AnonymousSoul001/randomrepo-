const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full bg-yellow-200 rounded-full h-2.5 dark:bg-red-700">
      <div
        className="bg-yellow-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
