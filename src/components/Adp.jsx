const Adp = () => {
  return (
    <section className="bg-gradient-to-br from-[#bf46a5] to-[#7029b2] py-[50px]">
      <div className="flex justify-center">
        <div className="text-center">
          <img
            width={100}
            className="mx-auto"
            src="https://developer.apple.com/app-store/features/images/members.svg"
            alt=""
          />
          <h2 className="text-[40px] font-bold text-white">
            Apple Developer Program
          </h2>
          <h5 className="text-[19px] text-white">
            Join the Apple Developer Program to reach customers around the{" "}
            <br /> world on the App Store iPhone, iPad, Mac, Apple TV, and{" "}
            <br /> Apple Watch. You’ll also get access to beta software,
            advanced app <br /> capabilities, extensive beta testing tools, and
            app analytics.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Adp;
