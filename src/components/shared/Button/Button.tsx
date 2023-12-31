import "./button.css";

function ButtonApp(props: any) {
  return (
    <div>
      <button className="button" onClick={props.action}>
        {String(props.text).toUpperCase()}
      </button>
    </div>
  );
}

export default ButtonApp;
