import React from "react";

const OverlayCard = ({ itemData }) => {
  return (
    <div className="absolute top-0 pl-[96px] w-full h-full z-10">
      <div className="h-screen w-full sticky top-0 flex items-center">
        <div className="h-[25rem] flex flex-col justify-between min-h-[30%] left-12 top-1/2 z-20 w-[380px] rounded-xl bg-white/20 p-6 text-white backdrop-blur-lg">
          <div className="pr-10">
            <span className="text-sm opacity-70">{itemData.id} - 4</span>

            <h2 className="mt-4 text-3xl font-light leading-tight font-arial">
              {itemData?.title}
            </h2>
            {/* <h2 className="mt-4 text-3xl font-light leading-tight font-arial">
              <span className="text-[#AAD7EB]">
                Beautiful <br />
              </span>
              and Secure <br />
              Environment
            </h2> */}
          </div>

          <p className="mt-6 text-sm leading-relaxed opacity-80 pl-10 font-arial">
            {itemData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
