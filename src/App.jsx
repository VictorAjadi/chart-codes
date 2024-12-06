import './App.css'
import BarChart from './components/BarChart'
import LineGraph from './components/LineGraph'
import PieChart from './components/PieChart'

function App() {

  return (
    <div className='w-50'>
      <LineGraph style={{ width: "100%", height: "400px" }}/>
      <br />
      <BarChart style={{ width: "50%", height: "400px" }}/>
      <br />
      <PieChart style={{ width: "50%", height: "400px" }}/>
    </div>
  )
}

export default App
