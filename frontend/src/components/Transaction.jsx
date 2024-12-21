export function Transaction() {

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-lg">
        Transactions | This Month

      </div >
      <div className=" flex gap-4 text-sm">
        <div className="bg-gray-300 rounded-full p-2 ">

          Payouts(22)
        </div>
        <div className="bg-sky-500 text-white rounded-full p-2">
          Refunds(6)

        </div>

      </div>
    </div>
  )
}
