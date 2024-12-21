export const RevenueCard = ({ amount, orderCount, date }) => {
  return <div className=" flex flex-col shadow-md text-white rounded-lg  ">
    <div className="flex bg-[#155FA3] hover:bg-[#1365AE] flex-col justify-end gap-3 rounded-lg ">

      <div className="p-2 flex  flex-col gap-3 justify-end">

        <div className="text-gray-200 flex items-center  gap-1 p-1 ">
          Next Payout  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>

        </div>
        <div className="flex justify-between gap-2 items-center ">
          <div className="text-3xl font-bold">
            $ {amount}

          </div>


          <div className="underline text-lg flex items-center font-medium">

            {orderCount} orders  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

        </div>
      </div>
      <div className="flex justify-between bg-[#114A84] p-2 px-3 rounded-b font-medium">

        <div>
          Next payout date:
        </div>

        <div>
          {date}
        </div>

      </div>
    </div>

    <div>

    </div>

  </div>
}
