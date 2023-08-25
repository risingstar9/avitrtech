import React from "react";
import { useNavigate  } from 'react-router-dom';
// import backImage from "../../../public/QR_bg.png";

const Photo = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full h-full items-center justify-start">
      <div style={{ backgroundImage: `url("/QR_bg.png")`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }} className="absolute w-full h-full">
      {/* <div className="w-full h-full"> */}
        <div className="w-full h-full flex flex-col items-center justify-between mx-auto ">
          <div className="rounded-t-[56px] flex flex-row  w-full pt-[77px] h-[132px] justify-between bg-black bg-opacity-50 px-[12px]">
            <div className="w-[28px] h-[28px]  mb-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="13.5"
                  stroke="white"
                  stroke-opacity="0.5"
                />
                <path
                  d="M9.16814 14.1834L15.8662 5.99684C16.2144 5.57126 16.8945 5.93776 16.7304 6.4626L15 12H19.4325C19.8564 12 20.088 12.4944 19.8166 12.8201L12.4595 21.6486C12.0968 22.0839 11.404 21.6754 11.6094 21.1473L14 15H9.55512C9.13331 15 8.90103 14.5098 9.16814 14.1834Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="w-[28px] h-[28px] mb-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path d="M22 19L15 12L8 19" stroke="white" stroke-width="2" />
              </svg>
            </div>
            <div className="w-[28px] h-[28px] mb-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <mask
                  id="mask0_1_141"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="29"
                  height="29"
                >
                  <circle cx="14.5" cy="14.5" r="4.5" fill="white" />
                  <circle cx="14.5" cy="14.5" r="8.5" stroke="white" />
                  <circle
                    cx="14.5"
                    cy="14.5"
                    r="13.5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-dasharray="0.1 2"
                  />
                </mask>
                <g mask="url(#mask0_1_141)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.78868 4.61729C-0.228182 7.23379 -1.42773 10.5127 -1.42773 14.0718C-1.42773 22.6322 5.51185 29.5718 14.0723 29.5718C17.6313 29.5718 20.9103 28.3722 23.5267 26.3554L1.78868 4.61729ZM26.3553 23.527C28.3725 20.9104 29.5723 17.6312 29.5723 14.0718C29.5723 5.51136 22.6327 -1.42822 14.0723 -1.42822C10.5128 -1.42822 7.23364 -0.228437 4.61702 1.78878L26.3553 23.527Z"
                    fill="white"
                  />
                </g>
                <path d="M4 4L25 25" stroke="white" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <div className=" flex flex-col w-full z-10 h-[152px] justify-start items-center bg-black bg-opacity-50 pt-[16px] pr-[16px]">
            <div className="flex flex-row w-full justify-between items-center h-[18px]">
              <text className="text-center text-gradient-photo text-[17px] font-rajdhani font-normal font-medium leading-[1.4px] tracking-[0.85px] uppercase text-[#FFFFFF]">
                Cinematic
              </text>
              <text className="text-center text-[17px] font-rajdhani font-thin font-medium leading-[1.4px] tracking-[0.85px] uppercase text-[#FFFFFF]">
                video
              </text>
              <text className="text-center text-[17px] font-rajdhani font-normal font-semibold leading-[1.4px] tracking-[0.85px] uppercase text-[#F8CB58]">
                Photo
              </text>
              <text className="text-center text-[17px] font-rajdhani font-normal font-medium leading-[1.4px] tracking-[0.85px] uppercase text-[#FFFFFF]">
                Portrait
              </text>
              <text className="text-center text-[17px] text-gradient-photo font-rajdhani font-normal font-medium leading-[1.4px] tracking-[0.85px] uppercase text-[#FFFFFF]">
                pano
              </text>
            </div>
            <svg
              className="w-[70px] h-[70px] mt-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="74"
              viewBox="0 0 75 74"
              fill="none"
            >
              <circle cx="37.5211" cy="37" r="30.4545" fill="white" />
              <circle
                cx="37.5211"
                cy="37"
                r="35"
                stroke="white"
                stroke-width="4"
              />
            </svg>
          </div>
          <div className="absolute mt-[180px] justify-start flex flex-col items-center w-full h-[381px]">
            <text className="text-white text-center font-circular text-[24px] font-semibold leading-normal">
              Your Product List (3 items)
            </text>
            <div className="relative justify-center items-center flex  mt-[30px]">
              <div className="absolute z-10">
                <img className="w-[191px] h-[191px]" src="QR.png" />
              </div>
              <div className="w-[230px] h-[253px] justify-center items-center flex flex-col bg-white opacity-10 rounded-[24px]"></div>
            </div>
            <button  onClick={() =>  navigate('/list')} className="hover:opacity-50 flex flex-row px-[17px] justify-between items-center w-[210px] h-[30px] rounded-[100px] bg-[#F8CB58] hover:backdrop-blur-lg mt-[32px]">
              <svg
                className="w-[18px] h-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.92912 9C1.92889 7.82524 2.22135 6.66893 2.78009 5.63555C3.33883 4.60217 4.14623 3.72428 5.12935 3.08121C6.11247 2.43814 7.24032 2.05014 8.41099 1.95229C9.58167 1.85443 10.7583 2.04979 11.8345 2.52072V2.87568C11.8345 3.44871 11.6069 3.99827 11.2017 4.40347C10.7965 4.80866 10.2469 5.0363 9.67391 5.0363C9.38401 5.03613 9.09704 5.09432 8.83009 5.20737C8.56315 5.32043 8.32168 5.48605 8.12008 5.69437C7.91848 5.9027 7.76086 6.14946 7.65662 6.41997C7.55237 6.69047 7.50363 6.9792 7.51329 7.26893V9.05402C7.51329 9.62705 7.28565 10.1766 6.88046 10.5818C6.47526 10.987 5.9257 11.2146 5.35267 11.2146H2.28279C2.04773 10.5 1.92834 9.75233 1.92912 9ZM12.4904 15.15C14.0274 14.2758 15.1824 12.859 15.7288 11.1773L15.5539 11.0487C14.99 10.7575 14.3661 10.6016 13.7315 10.5935H11.3239C10.8298 10.6372 10.37 10.8643 10.0351 11.2302C9.70013 11.5961 9.51436 12.0741 9.51436 12.5702C9.51436 13.0662 9.70013 13.5442 10.0351 13.9101C10.37 14.276 10.8298 14.5032 11.3239 14.5469C11.553 14.5442 11.7793 14.598 11.9827 14.7034C12.1861 14.8088 12.3605 14.9626 12.4904 15.1513V15.15ZM9 0C6.61305 0 4.32387 0.948211 2.63604 2.63604C0.948211 4.32387 0 6.61305 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0Z"
                  fill="black"
                />
              </svg>
              <text className="text-[#1D1716] text-center font-helvetica text-[16px] font-medium leading-normal">
                yourproductlist.com
              </text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
