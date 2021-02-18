const HelloWorld = (props) => {
  console.log(props);
  return (
    <div>
      <h1 onClick={props.fun}>{props.name}</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default HelloWorld;
