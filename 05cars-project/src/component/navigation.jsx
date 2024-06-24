const Navigation = () => {
  return (
    <nav className="flex justify-around py-2 mt-2 items-center">
      <div>
        <a href="">
          <img src="/img/brand_logo.png" alt="" />
        </a>
      </div>

      <ul className="flex gap-8">
        <li href="#" className="font-semibold cursor-pointer">
          Home
        </li>
        <li href="#" className="font-semibold cursor-pointer">
          About
        </li>
        <li href="#" className="font-semibold cursor-pointer">
          Gallery{" "}
        </li>
        <li href="#" className="font-semibold cursor-pointer">
          Contact Us
        </li>
      </ul>
      <button className="bg-red-600 text-white px-5 py-1">login</button>
    </nav>
  );
};

export default Navigation;
