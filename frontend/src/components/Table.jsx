export function Table(transactions) {
  function geticon(transaction) {
    switch (transaction["status"]) {

      case "Successful":
        return "h-3 w-3 rounded-full bg-green-500"
      case "Failed":

        return "h-3 w-3 rounded-full bg-red-500"
      default:

        return "h-3 w-3 rounded-full bg-gray-500"

    }
  }
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right  ">
        <thead class="text-xs  uppercase  ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Order ID
            </th>
            <th scope="col" class="px-6 py-3">
              STATUS
            </th>
            <th scope="col" class="px-6 py-3">
              TRANSACTION ID
            </th>
            <th scope="col" class="px-6 py-3">
              Refund Date
            </th>

            <th scope="col" class="px-6 py-3">
              Order amount
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions['transactions'].map((transaction) => (
            <tr key={transaction.id} className="bg-white border-b">
              <th class="px-6 py-4  text-sky-700 font-semiboldd  whitespace-nowrap ">
                #{transaction["orderID"]}
              </th>
              <td class="px-6 py-4 flex gap-2 items-center">
                <div className={geticon(transaction)}>
                  <div></div>
                </div>
                <div>
                  {transaction["status"]}
                </div>


              </td>
              <td class="px-6 py-4">
                {transaction["transactionID"]}
              </td>
              <td class="px-6 py-4">
                {transaction["refundDate"]}
              </td>

              <td class="px-6 py-4">
                $ {transaction["amount"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

