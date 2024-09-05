const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div>
        <a href="#" className="w-12">
              <img
                src="../../public/img/Header.png"
                alt="logo-img"
                className="w-auto "
              />
            </a>
        </div>

        <ul className="flex gap-3">
          <li className="font-serif">Home</li>
          <li className="font-serif">About Us</li>
          <li className="font-serif">Contact</li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
