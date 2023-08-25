import React, { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shopdata, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app.avitrtech.com/connect/v1/3209768/p/SoS1m9Q"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // console.log("dkdkkdkdd", shopdata.products);

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
            <img
              className="w-[44px] h-[29px] mt-[9px]"
              src={shopdata.customer_logo}
            />
            <div className="ml-[24px] flex flex-col">
              <text className=" text-[#010101] font-inter text-[20px] font-semibold leading-normal">
                Your List ({shopdata.products.length})
              </text>
              <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-medium leading-normal">
                {shopdata.store_name} {shopdata.store_number}
              </text>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#ECEEF0]"></div>

          <div className="w-full flex-col flex pl-[16px] pt-[24px]">
            {shopdata.products &&
              shopdata.products.map((val) => {
                console.log(val);
                return (
                  <div className="w-full  pl-[10px] pr-[16px] py-[4px]">
                    <div className="flex flex-row">
                      <img
                        className="w-[39px] h-[47px] mt-[2px]"
                        src={val.image_url}
                      />
                      <div className="flex flex-col ml-[20px]">
                        <text className="text-[#BABBBF] font-inter text-[14px] font-normal leading-normal">
                          {val.description.split("-")[0].trim()}
                        </text>
                        <text className="mt-[6px] text-[#1F232C] font-inter text-[14px] font-semibold leading-normal">
                          {val.description}
                        </text>
                        <text className="mt-[10px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                          Qty: {val.quantity}
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
                          ${val?.price}
                        </text>
                        <text className="mt-[13px] text-[#979BA4] font-inter text-[14px] font-medium leading-[140.023%]">
                          IN STOCK - Product Location
                        </text>
                        <div className="mt-[5px] w-[154px] justify-center items-center flex flex-col  h-[31px] rounded-[6px] bg-[#010101]">
                          <text className="text-white text-center font-inter text-[14px] font-semibold leading-normal">
                            Aisle: {val.product_location?.aisle} - Bay:{" "}
                            {val.product_location?.bin}
                          </text>
                        </div>
                        {val.discount?.qr_code ? (
                          <>
                            <text className="mt-[16px] text-[#1F232C] font-inter text-[14px] font-medium leading-[140.023%]">
                              Scan the QR code below when checking out to appy
                              the discount.
                            </text>
                            <div className="mt-[10px] w-[134px] h-[134px] flex flex-col justify-center items-center">
                              {val?.discount?.qr_code ? (
                                <img
                                  className="w-[134px] h-[134px]"
                                  src={val.discount.qr_code}
                                />
                              ) : (
                                ""
                              )}

                              <text className="text-[#010101] text-center font-inter text-[14px] font-semibold leading-normal">
                                {val?.discount?.discount_percent
                                  ? val.discount.discount_percent + "% Discount"
                                  : ""}
                              </text>
                            </div>
                            <text className="mt-[16px] text-[#979BA4] font-Inter text-[12px] font-medium leading-[140.023%]">
                              {val?.discount?.expiry_date_yyyymmdd
                                ? "ode valid until " +
                                  val.discount.expiry_date_yyyymmdd
                                : ""}
                            </text>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="w-full mt-[32px] h-[1px] bg-[#ECEEF0]"></div>
                  </div>
                  
                );
              })}
            
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
