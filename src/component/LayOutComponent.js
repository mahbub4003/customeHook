import useWindowwidth from "./hooks/useWindowwidth";

function LayOutComponent() {
  const onSmallScreen = useWindowwidth();

  return (
    <div>
      <h1 className={onSmallScreen ? "small" : "large"}>
        You are browsing on {onSmallScreen ? "small" : "large"} devise
      </h1>
    </div>
  );
}

export default LayOutComponent;
