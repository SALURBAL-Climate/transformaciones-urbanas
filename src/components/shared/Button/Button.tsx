import "./button.css";

function ButtonApp(props: any) {
  const scrollToElement = () => {
    const element = document.getElementById(props.scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div>
      <button
        className="button"
        onClick={
          props.scrollId
            ? () => {
                scrollToElement();
              }
            : props.action
        }
      >
        {String(props.text).toUpperCase()}
      </button>
    </div>
  );
}

export default ButtonApp;
