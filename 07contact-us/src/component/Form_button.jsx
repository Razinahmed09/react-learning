

const Form_button = (props) => {
//   console.log(props);
  return (
    <>
      <a
        href=""
        className="flex gap-2 items-center justify-center bg-black px-4 py-2 h-10 w-60 text-white rounded"
      >
        
        {props.icon}
        {props.text}
      </a>
    </>
  );
};

export default Form_button;
