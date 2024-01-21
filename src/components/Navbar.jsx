const Navbar = () => {
  return (
    <nav className="bg-[rgba(240,240,240,0.8)] ">
      <div className="max-w-[980px] mx-auto">
        <ul className="flex justify-between items-center pl-[calc(max(22px, env(safe-area-inset-left)))] pr-[calc(max(22px, env(safe-area-inset-right)))]">
          <li>
            <a href="#">
              <img
                className="w-[115px]"
                src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Develop</a>
          </li>
          <li>
            <a href="#">Distribute</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='44' viewBox='0 0 16 44'%3E%3Cpath d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z' fill='%23666666'/%3E%3C/svg%3E" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
