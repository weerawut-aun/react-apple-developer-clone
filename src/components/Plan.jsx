const Plan = () => {
  return (
    <div className="text-white bg-gradient-to-b from-[#2e3e58] to-[#21283c]">
      <div className="w-[980px] mx-auto text-center">
        <div className="p-[1.5em]">
          <h2 className="text-[40px] font-bold">New to Apple platforms?</h2>
          <p className="text-[19px] mt-[0.4em]">
            Get familiar with the tools and technologies you’ll use to build
            apps and games. The <br /> Apple development ecosystem provides
            everything you need to bring incredible <br /> experiences to people
            around the world.
          </p>
          <ul className="grid grid-cols-6">
            <li>
              <a href="#" className="inline-block hover:underline">
                <img
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-ios-i.svg"
                  alt=""
                />
                <p>iOS</p>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block hover:underline">
                <img
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-ipados-i.svg"
                  alt=""
                />
                <p>iPadOS</p>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block hover:underline">
                <img
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-macos-i.svg"
                  alt=""
                />
                <p>macOS</p>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block hover:underline">
                <img
                  src="	https://developer.apple.com/assets/elements/icons/platforms/icon-tvos-i.svg"
                  alt=""
                />
                <p>tvOS</p>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block hover:underline">
                <img
                  src="	https://developer.apple.com/assets/elements/icons/platforms/icon-visionos-i.svg"
                  alt=""
                />
                <p>visionOS</p>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block hover:underline">
                <img
                  src="	https://developer.apple.com/assets/elements/icons/platforms/icon-watchos-i.svg"
                  alt=""
                />
                <p>watchOS</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;
