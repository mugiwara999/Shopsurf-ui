import './App.css'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Overview } from './components/Overview'
import { RevenueCard } from './components/RevenueCard'
import { Sidebar } from './components/Sidebar'
import { Table } from './components/Table'
import { TopBar } from './components/TopBar'
import { Transaction } from './components/Transaction'

function App() {


  const transactions = [
    {
      orderID: "ORD-2024-01-15-001",
      status: "Successful",
      transactionID: "TXN-PYPL-7B9X-3C2D",
      amount: 3423,
      refundDate: "2024-01-15",
      id: 1
    },
    {
      orderID: "ORD-2024-02-20-002",
      status: "Pending",
      transactionID: "TXN-STRP-5N6M-4K1H",
      amount: 5750,
      refundDate: "2024-02-20",
      id: 2
    },
    {
      orderID: "ORD-2024-03-10-003",
      status: "Failed",
      transactionID: "TXN-RAZR-2P7Q-9W3E",
      amount: 2250,
      refundDate: "2024-03-10",
      id: 3
    },
    {
      orderID: "ORD-2024-04-05-004",
      status: "Successful",
      transactionID: "TXN-SQRE-6T4Y-8R1S",
      amount: 7500,
      refundDate: "2024-04-05",
      id: 4
    },
    {
      orderID: "ORD-2024-05-18-005",
      status: "Successful",
      transactionID: "TXN-APPL-1D5F-7G3H",
      amount: 1200,
      refundDate: "2024-05-18",
      id: 5
    },
    {
      orderID: "ORD-2024-06-22-006",
      status: "Pending",
      transactionID: "TXN-GOOG-9K2L-5M6N",
      amount: 4600,
      refundDate: "2024-06-22",
      id: 6
    },
    {
      orderID: "ORD-2024-07-30-007",
      status: "Failed",
      transactionID: "TXN-MSFT-3J8P-6Q4R",
      amount: 3300,
      refundDate: "2024-07-30",
      id: 7
    },
    {
      orderID: "ORD-2024-08-12-008",
      status: "Successful",
      transactionID: "TXN-AMZN-2X5C-9V1B",
      amount: 6200,
      refundDate: "2024-08-12",
      id: 8
    },
    {
      orderID: "ORD-2024-09-25-009",
      status: "Pending",
      transactionID: "TXN-FB-7K3M-1N9P",
      amount: 2800,
      refundDate: "2024-09-25",
      id: 9
    },
    {
      orderID: "ORD-2024-10-08-010",
      status: "Successful",
      transactionID: "TXN-TSLA-4D6F-8H2J",
      amount: 5100,
      refundDate: "2024-10-08",
      id: 10
    },
    {
      orderID: "ORD-2024-11-16-011",
      status: "Failed",
      transactionID: "TXN-NFLX-5S7G-3T1W",
      amount: 4000,
      refundDate: "2024-11-16",
      id: 11
    },
    {
      orderID: "ORD-2024-12-03-012",
      status: "Successful",
      transactionID: "TXN-NVDA-9L2K-6M4N",
      amount: 6700,
      refundDate: "2024-12-03",
      id: 12
    },
    {
      orderID: "ORD-2025-01-20-013",
      status: "Pending",
      transactionID: "TXN-INTC-1R5T-7Y3U",
      amount: 3200,
      refundDate: "2025-01-20",
      id: 13
    },
    {
      orderID: "ORD-2025-02-14-014",
      status: "Successful",
      transactionID: "TXN-ADBE-6W8E-2Q9R",
      amount: 5500,
      refundDate: "2025-02-14",
      id: 14
    },
    {
      orderID: "ORD-2025-03-07-015",
      status: "Failed",
      transactionID: "TXN-CRM-3Z7X-5B1V",
      amount: 2600,
      refundDate: "2025-03-07",
      id: 15
    },
    {
      orderID: "ORD-2025-04-19-016",
      status: "Successful",
      transactionID: "TXN-ORCL-4P6S-8D2F",
      amount: 4900,
      refundDate: "2025-04-19",
      id: 16
    },
    {
      orderID: "ORD-2025-05-11-017",
      status: "Pending",
      transactionID: "TXN-SAP-7H3J-1K5L",
      amount: 3700,
      refundDate: "2025-05-11",
      id: 17
    },
    {
      orderID: "ORD-2025-06-28-018",
      status: "Successful",
      transactionID: "TXN-CSCO-2M9N-6T4Y",
      amount: 6300,
      refundDate: "2025-06-28",
      id: 18
    },
    {
      orderID: "ORD-2025-07-15-019",
      status: "Failed",
      transactionID: "TXN-QCOM-5R7U-3W1X",
      amount: 2900,
      refundDate: "2025-07-15",
      id: 19
    },
    {
      orderID: "ORD-2025-08-02-020",
      status: "Successful",
      transactionID: "TXN-INTU-9K2L-7M3N",
      amount: 5800,
      refundDate: "2025-08-02",
      id: 20
    }
  ]
  return (
    <div className="bg-white-50">
      <Sidebar />

      <div className="border-b border-black-150 sm:pl-64 bg-white-500">
        <TopBar />
      </div>

      <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transaction />
          <Table transactions={transactions} />
        </div>
        <Footer />
      </div>

    </div>

  )
}

export default App
