import Header from "@/components/Header";
import Image from "next/image";
import { SlGraph } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      {/* <div className="bg-top-section -z-10"></div> */}
      <div className="w-full h-screen bg-neutral-100 flex">
        <Header />
        <div className="mt-5 flex-1 flex">
          <div className="section-1 flex-1 flex flex-col my-4 2xl:mx-28  md:mx-8">
            <div className="text-2xl font-semibold">Dashboard</div>
            {/* Card */}
            <div className="card shadow-sm mt-10  h-56 rounded-xl bg-white px-4 py-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="text-gray-400 text-sm font-semibold">
                  Available balance
                </div>
                <div className="credit flex items-center gap-x-2">
                  <div className="text-gray-400 text-xs font-semibold">
                    Credit
                  </div>
                  <div className="h-6 p-1 rounded-full w-10 bg-neutral-300 flex items-center justify-end">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 font-semibold text-4xl">
                $12,234
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm">***** 4322</div>
                <div className="circles flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full bg-orange-600 relative -right-1"></div>
                  <div className="w-5 h-5 rounded-full bg-red-600"></div>
                </div>
              </div>
            </div>
            {/* Card */}

            <div className="payment  my-6 flex flex-col gap-y-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Internet payment limit
                </div>
                <div className="text-base text-gray-800 font-medium">
                  $1200/3000
                </div>
              </div>
              <div className="my-1 w-full h-3 bg-neutral-200 rounded-2xl">
                <div className=" w-1/2 bg-black h-3 rounded-2xl"></div>
              </div>
            </div>
            <div className=" flex items-center justify-between gap-x-5">
              <div className="w-full py-3 border bg-neutral-100 border-gray-300 rounded-lg flex items-center">
                <SlGraph className="flex-1 text-4xl" />
                <div className="flex-1">
                  <div className="text-sm my-1 text-gray-400 font-semibold">
                    Income
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    $5700
                  </div>
                </div>
              </div>
              <div className="w-full py-3 bg-white shadow-sm rounded-lg flex items-center">
                <SlGraph className="flex-1 text-4xl rotate-45" />
                <div className="flex-1">
                  <div className="text-sm my-1 text-gray-400 font-semibold">
                    Spendings
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    $5700
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4 flex flex-col gap-y-2 px-2">
              <div className="flex items-center justify-between">
                <div className="text-gray-800 font-bold">Latest spendings</div>
                <div className="text-gray-400 text-sm font-bold">View All</div>
              </div>
              <div className="h-0.5 w-full bg-gray-300" />
              <div className="list flex flex-col gap-y-2 mt-2">
                <div className="c__list-item flex items-center">
                  <div className="icon w-10 h-10 rounded-md bg-white flex justify-center items-center">
                    <FaShoppingCart />
                  </div>
                  <div className="flex-1 flex items-center justify-between ml-4">
                    <div className="flex-1">
                      <div className="text-sm">Online store</div>
                      <div className="text-xs text-gray-400 font-semibold">
                        May 23, 2022 at 8:20 PM
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-bold">-$32.50</div>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
                <div className="c__list-item flex items-center">
                  <div className="icon w-10 h-10 rounded-md bg-white flex justify-center items-center">
                    <FaShoppingCart />
                  </div>
                  <div className="flex-1 flex items-center justify-between ml-4">
                    <div className="flex-1">
                      <div className="text-sm">Online store</div>
                      <div className="text-xs text-gray-400 font-semibold">
                        May 23, 2022 at 8:20 PM
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-bold">-$32.50</div>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
                <div className="c__list-item flex items-center">
                  <div className="icon w-10 h-10 rounded-md bg-white flex justify-center items-center">
                    <FaShoppingCart />
                  </div>
                  <div className="flex-1 flex items-center justify-between ml-4">
                    <div className="flex-1">
                      <div className="text-sm">Online store</div>
                      <div className="text-xs text-gray-400 font-semibold">
                        May 23, 2022 at 8:20 PM
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-bold">-$32.50</div>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-1 flex-1 flex flex-col my-4 mx-24">
            <div className="graph mt-14">
              <div className="flex items-center justify-between">
                <div className="text-base font-bold">Expenses statistics</div>
                <div className="flex items-center gap-x-1">
                  <div className="text-gray-400 text-sm">Week</div>
                  <AiOutlineRight className="text-gray-400 text-sm rotate-90" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="col flex flex-col gap-y-3 text-sm">
                  <div className="text-gray-400">120k</div>
                  <div className="text-gray-400">90k</div>
                  <div className="text-gray-400">60k</div>
                  <div className="text-gray-400">30k</div>
                  <div className="text-gray-400">20k</div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <SlGraph className="font-normal" size={120} />
                </div>
              </div>
              <div className="row flex text-xs ml-12 mt-2 justify-between">
                {/* <div /> */}
                <div className="text-gray-400">May 12</div>
                <div className="text-gray-400">May 13</div>
                <div className="text-gray-400">May 14</div>
                <div className="text-gray-400">May 15</div>
                <div className="text-gray-400">May 16</div>
                <div className="text-gray-400">May 17</div>
              </div>
            </div>
            <div className="send__money flex flex-col gap-y-2 my-8">
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">Send money to</div>
                <AiOutlineRight />
              </div>
              <div className="h-0.5 w-full bg-neutral-200 my-2" />
              <div className="flex w-full items-center justify-between">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&q=80&w=1966&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="scheduled-payments my-2">
              <div className="font-semibold text-base">Scheduled payments </div>
              <div className="flex items-center justify-between my-4 text-sm text-gray-100">
                <div className="scheduled__card  py-3 px-4 h-32 w-32 bg-pink-500 border rounded-md border-pink-300 flex flex-col justify-between">
                  <div className="">$13.99/m</div>
                  <div className="flex flex-col">
                    <img src="assets/play.png" className="w-8 h-8" alt="" />
                    <div>Ps5 game</div>
                  </div>
                </div>
                <div className="scheduled__card py-3 px-4 h-32 w-32 bg-cyan-500 border rounded-md border-cyan-300 flex flex-col justify-between">
                  <div className="">$1.99/m</div>
                  <div className="flex flex-col">
                    <img
                      src="assets/discord.png"
                      className="w-8 h-8 invert"
                      alt=""
                    />
                    <div>Discord</div>
                  </div>
                </div>
                <div className="scheduled__card py-3 px-4 h-32 w-32 bg-gray-900 border rounded-md border-gray-800 flex flex-col justify-between">
                  <div className="">$13.99/m</div>
                  <div className="flex flex-col">
                    <img
                      src="assets/wat.png"
                      className="w-8 h-8 invert"
                      alt=""
                    />
                    <div>Wattpad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
