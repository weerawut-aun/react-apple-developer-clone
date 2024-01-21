const Links = () => {
  return (
    <div>
      <div className="w-[450px] md:w-[980px] mx-auto py-[30px]">
        <div className="flex flex-col md:flex-row text-center">
          <div>
            <a href="#" className="group">
              <figure className="w-[50px] h-[50px] mx-auto bg-no-repeat bg-[url('https://developer.apple.com/assets/elements/icons/wwdr-unified/download-c.svg')]"></figure>
              <p className="my-[15px]">
                <strong>Downloads</strong>
              </p>
              <p className="mb-[10px]">
                Get the latest SDKs and beta operating systems for all Apple
                platforms.
              </p>
              <p className="text-[#0066CC] group-hover:underline">
                Download resources
              </p>
            </a>
          </div>
          <div>
            <a href="#" className="group">
              <figure className="w-[50px] h-[50px] mx-auto bg-no-repeat bg-[url('https://developer.apple.com/assets/elements/icons/wwdr-unified/documentation-c.svg')]"></figure>
              <p className="my-[15px]">
                <strong>Documentation</strong>
              </p>
              <p className="mb-[10px]">
                Browse the latest documentation including API reference,
                articles, and sample code.
              </p>
              <p className="text-[#0066CC] group-hover:underline">
                Read documentation
              </p>
            </a>
          </div>
          <div>
            <a href="#" className="group">
              <figure className="w-[50px] h-[50px] mx-auto bg-no-repeat bg-[url('https://developer.apple.com/assets/elements/icons/wwdr-unified/play-c.svg')]"></figure>
              <p className="my-[15px]">
                <strong>Videos</strong>
              </p>
              <p className="mb-[10px]">
                Learn about the latest technologies presented at Apple developer
                events.
              </p>
              <p className="text-[#0066CC] group-hover:underline">
                Watch videos
              </p>
            </a>
          </div>
          <div>
            <a href="#" className="group">
              <figure className="w-[50px] h-[50px] mx-auto bg-no-repeat bg-[url('https://developer.apple.com/assets/elements/icons/wwdr-unified/forum-c.svg')]"></figure>
              <p className="my-[15px]">
                <strong>Forums</strong>
              </p>
              <p className="mb-[10px]">
                Ask questions and discuss development topics with Apple
                engineers and other developers.
              </p>
              <p className="text-[#0066CC] group-hover:underline">
                View forums
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
