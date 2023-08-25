import React, { useEffect, useState } from "react";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div
          id="loading"
          className="w-full h-full flex flex-col items-center justify-start transition-opacity duration-1000 ease-in-out opacity-100"
        >
          <text
            className="w-[287px] mt-[108px]
            text-center text-[20px] font-inter font-normal font-semibold leading-normal text-[#010101]"
          >
            One moment while we load your shopping list...
          </text>
          <div className="absolute mt-[88px] w-[220px] h-[220px]">
            <img src="loading.gif" alt="Loading" />
          </div>
        </div>
      ) : (
        <div
          id="list"
          className="w-full flex flex-col pb-[28px]  duration-1000 ease-out-in opacity-100"
        >
          <div className="w-full h-[1px] bg-[#ECEEF0]"></div>
          <div className="w-full h-[71px] mt-[21px] flex flex-row px-[16px]">
            <img className="w-[44px] h-[29px] mt-[9px]" src="mark.png" />
            <div className="ml-[24px] flex flex-col">
              <text className=" text-[#010101] font-inter text-[20px] font-semibold leading-normal">
                Your List (3)
              </text>
              <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-medium leading-normal">
                Store #1234
              </text>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#ECEEF0]"></div>
          <div className="w-full flex-col flex pl-[16px] pt-[24px]">
            <div className="w-[377px] pb-[32px] pl-[10px] pr-[16px] py-[4px]">
              <div className="flex flex-row">
                <img className="w-[39px] h-[47px] mt-[2px]" src="list1.png" />
                <div className="flex flex-col ml-[20px]">
                  <text className="text-[#BABBBF] font-inter text-[14px] font-normal leading-normal">
                    Teton Sports
                  </text>
                  <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-normal">
                    Mammoth Queen Size Flannel Lined Sleeping Bag
                  </text>
                  <text className="mt-[10px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                    Qty: 1
                  </text>
                  <div className="mt-[4px] flex flex-row">
                    <text className="text-[#1F232C] font-inter text-[14px] font-normal leading-[140.023%]">
                      Color:
                    </text>
                    <text className="text-[#1F232C] font-inter text-[14px] font-semibold leading-[140.023%]">
                      Green
                    </text>
                  </div>
                  <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-[140.023%]">
                    $210.00
                  </text>
                  <text className="mt-[13px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                    IN STOCK - Product Location
                  </text>
                  <div className="mt-[5px] w-[154px] justify-center items-center flex flex-col  h-[31px] rounded-[6px] bg-[#010101]">
                    <text className="text-white text-center font-inter text-[14px] font-semibold leading-normal">
                      Aisle: 5 - Bay: 12
                    </text>
                  </div>
                  <text className="mt-[16px] text-[#1F232C] font-inter text-[14px] font-medium leading-[140.023%]">
                    Scan the QR code below when checking out to appy the
                    discount.
                  </text>
                  <div className="mt-[10px] w-[134px] h-[134px] flex flex-col justify-center items-center">
                    <img className="w-[134px] h-[134px]" src="QR.png" />
                    <text className="text-[#010101] text-center font-inter text-[14px] font-semibold leading-normal">
                      10% Discount
                    </text>
                  </div>
                  <text className="mt-[16px] text-[#979BA4] font-Inter text-[12px] font-medium leading-[140.023%]">
                    Code valid until 10/10/2023
                  </text>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#ECEEF0]"></div>

            <div className="mt-[25px] w-[377px] pb-[32px] pl-[10px] pr-[16px] py-[4px]">
              <div className="flex flex-row">
                <img className="w-[53px] h-[40px] mt-[2px]" src="list2.png" />
                <div className="flex flex-col ml-[20px]">
                  <text className="text-[#BABBBF] font-inter text-[14px] font-normal leading-normal">
                    Pendleton
                  </text>
                  <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-normal">
                    Glacier National Park Queen Blanket
                  </text>
                  <text className="mt-[10px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                    Qty: 1
                  </text>
                  <div className="mt-[4px] flex flex-row">
                    <text className="text-[#1F232C] font-inter text-[14px] font-normal leading-[140.023%]">
                      Color:
                    </text>
                    <text className="text-[#1F232C] font-inter text-[14px] font-semibold leading-[140.023%]">
                      striped
                    </text>
                  </div>
                  <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-[140.023%]">
                    $330.00
                  </text>
                  <text className="mt-[13px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                    IN STOCK - Product Location
                  </text>
                  <div className="mt-[5px] w-[154px] justify-center items-center flex flex-col  h-[31px] rounded-[6px] bg-[#010101]">
                    <text className="text-white text-center font-inter text-[14px] font-semibold leading-normal">
                      Aisle: 14 - Bay: 06
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#ECEEF0]"></div>

            <div className="mt-[25px] w-[377px] pb-[32px] pl-[10px] pr-[16px] py-[4px]">
              <div className="flex flex-row">
                <img
                  className="w-[53px] h-[44.52px] mt-[2px]"
                  src="list3.png"
                />
                <div className="flex flex-col ml-[20px]">
                  <text className="text-[#BABBBF] font-inter text-[14px] font-normal leading-normal">
                    Gerber
                  </text>
                  <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-normal">
                    Bear Grylls Fire Starter
                  </text>
                  <text className="mt-[10px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                    Qty: 1
                  </text>
                  <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-[140.023%]">
                    $23.00
                  </text>
                  <text className="mt-[13px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                    IN STOCK - Product Location
                  </text>
                  <div className="mt-[5px] w-[154px] justify-center items-center flex flex-col  h-[31px] rounded-[6px] bg-[#010101]">
                    <text className="text-white text-center font-inter text-[14px] font-semibold leading-normal">
                      Aisle: 18 - Bay: 03
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#ECEEF0]"></div>
            <text className="mt-[26px] text-[#979BA4] text-center font-inter text-[14px] font-semibold leading-normal">
              You’ve reached the end of your list.
            </text>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
