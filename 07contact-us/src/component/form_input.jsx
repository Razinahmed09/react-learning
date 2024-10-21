const Input = () => {
  return (
    <div>
      <div className="py-3 flex flex-col justify-start relative ">
        <div className="flex">
        <label
          htmlFor="Name"
          className="text-black border-b border-white absolute bg-white px-2 top-[-2px] left-[12px] "
        >
          Name
        </label>
        <input
          type="text"
          name=""
          id=""
          className=" border border-black w-[80%] px-2 py-2"
        />
        </div>
        <div className="flex mt-8">
          <label
            htmlFor="Email"
            className="text-black border-b border-white absolute bg-white px-2  top-[54px] left-[12px] pt-5"
          >
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className=" border border-black w-[80%] px-2 py-2 "
          />
        </div>
        <div className="flex">
        <label
            className="text-black border-b flex flex-col border-white absolute w-[80%] bg-white px-2 pt-5 text-left"
          >Textarea
         <textarea name="" id="" className=" border border-black px-2 py-2 "></textarea>
         </label>
        </div>
      </div>
    </div>
  );
};

export default Input;
