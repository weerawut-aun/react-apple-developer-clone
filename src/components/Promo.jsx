const Promo = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        <li className="w-full md:w-[50%] h-[592px] border-[6px] border-[#fff] border-solid">
          <div className="overflow-hidden text-center bg-[url('https://devimages-cdn.apple.com/wwdc-services/articles/images/D49844A8-C710-4B9C-AA23-0C249E48B1AD/2048.jpeg')] bg-cover h-full bg-center">
            <a href="#">
              <h3 className="text-[40px] font-bold mt-[52px]">
                Hellow Develop
              </h3>
              <p>
                The first edition of 2024 is all about
                <br /> Apple Vision Pro.
              </p>
            </a>
          </div>
        </li>
        <li className="w-full md:w-[50%] h-[592px] border-[6px] border-[#fff] border-solid">
          <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/events/images/hero-large_2x.jpg')] bg-cover h-full bg-center">
            <a href="#">
              <h3 className="text-[40px] font-bold mt-[52px]">
                Meet with to Expers
              </h3>
              <p>Explore worldwide activities</p>
            </a>
          </div>
        </li>
        <li className="w-full md:w-[50%] h-[592px] border-[6px] border-[#fff] border-solid">
          <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-event-asa-2023/w-medium_2x.jpg?2')] bg-cover h-full bg-center">
            <a href="#">
              <h3 className="text-[40px] text-white font-bold mt-[52px]">
                App Store Award
              </h3>
              <p className="text-white">2023</p>
            </a>
          </div>
        </li>
        <li className="w-full md:w-[50%] h-[592px] border-[6px] border-[#fff] border-solid">
          <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-ssc/medium_2x.png?2')] bg-cover h-full bg-center">
            <a href="#">
              <h3 className="text-[40px] font-bold mt-[52px]">
                Swift Student Challenge
              </h3>
              <p>The future is your to create</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Promo;
