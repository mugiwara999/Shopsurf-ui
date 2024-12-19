import './App.css'
import { Card } from './components/Card'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-3 gap-6'>
      <RevenueCard amount={10000} orderCount={33} date="Today, 4 PM" />

      <Card title={"Amount Pending"} amount={10000} orderCount={13}></Card>
      <Card title={"Amount Processed"} amount={20000}></Card>

    </div>

  )
}

export default App
