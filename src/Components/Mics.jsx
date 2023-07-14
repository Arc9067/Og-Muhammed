import React from "react";
import Logo from "../assets/logo.png";
import supply from "../assets/supply.svg";
import tax from "../assets/tax.svg";
import mc from "../assets/mc.svg";
import lp from "../assets/lp.svg";

const Mics = () => {
  return (
    <section className="py-14 w-full">
      <div className="container flex flex-col items-center gap-12">
        <div className="text-center text-white text-5xl md:text-7xl font-Header">
          TOKENOMICS
        </div>

        <section
          className="grid grid-cols-1 lg:grid-cols-2 jube
       items-center gap-16 mt-10"
        >
          <img src={Logo} alt="" />
          <div className="flex-col justify-start items-start gap-[34px] inline-flex">
            <div className="justify-start items-center gap-3 inline-flex font-Header">
              <img className="w-12 h-12" src={supply} />
              <div className="justify-center items-center gap-3 flex">
                <div className="text-white text-2xl lg:text-4xl font-normal">
                  Total Supply:
                </div>
                <div className="text-white text-2xl lg:text-4xl font-sans">
                  100,000,000
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <img className="w-12 h-12" src={tax} />
              <div className="justify-center items-center gap-3 flex">
                <div className="text-white text-2xl lg:text-4xl font-Header">
                  Tax
                </div>
                <div className="text-white text-2xl lg:text-4xl font-normal font-sans">
                  1%
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <img className="w-12 h-12" src={mc} />
              <div className="justify-center items-center gap-3 flex">
                <div className="text-white text-2xl lg:text-4xl font-Header">
                  Max Wallet
                </div>
                <div className="text-white text-2xl lg:text-4xl font-sans">
                  5%
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <img className="w-12 h-12" src={lp} />
              <div className="justify-center items-center gap-3 flex">
                <div className="text-white text-2xl lg:text-4xl font-Header">
                  Max Trx
                </div>
                <div className="text-white text-2xl lg:text-4xl font-normal">
                  2%
                </div>
              </div>
            </div>
          </div>{" "}
        </section>
      </div>
    </section>
  );
};

export default Mics;
