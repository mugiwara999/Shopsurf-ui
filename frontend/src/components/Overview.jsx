import { Card } from "./Card";
import { RevenueCard } from "./RevenueCard";

export function Overview() {
  return (
    <div className="p-2">
      <div className="text-2xl font-normal mb-3 ">
        Overview
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <RevenueCard amount={50000} orderCount={45} date={"15 Jan 2025"}></RevenueCard>
        <Card title={"Amount Pending"} amount={10000} orderCount={32}></Card>
        <Card title={"Amount Processed"} amount={30000}></Card>

      </div>
    </div >)
} 
