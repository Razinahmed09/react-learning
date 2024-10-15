

const Form_button = (props) => {
//   console.log(props);
const { isOutline } = props;
  return (
    <>
      <a
        href=""
        className={`${isOutline ? 'bg-white border !text-black border-black w-[80%] cursor-pointer' : 'bg-black text-white border-none' } flex gap-2 cursor-pointer items-center justify-center px-4 py-2 h-10 w-60 text-white rounded`}
      >
        
        {props.icon}
        {props.text}
      </a>
    </>
  );
};

export default Form_button;
