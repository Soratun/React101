import Transaction from './Coponents/Transaction' ;
import FromComponent from './Coponents/FromComponent'
import DataContext from './Data/DataContext';
import './App.css';
import { useState,useEffect/*,useReducer*/ } from 'react';
import ReportComponent from './Coponents/ReportComponent';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';



function App() {
  const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}
  const initState = [
    {id:1,title:"เงินเดือน",amount:50000},
    {id:2,title:"ค่าเช่า",amount:-8000},
    {id:3,title:"ค่าขนม",amount:-500},
    {id:4,title:"ขายของ",amount:20000}
  ]
  const [items,setItems] = useState(initState);

  const [reportIncome,setReportIncome] = useState(0);
  const [reportExpense,setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total,element) => total += element,0)
    const expense = (amounts.filter(element => element < 0).reduce((total,element) => total += element,0))*-1

    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])
  
return (
    <DataContext.Provider value={{income : reportIncome,expense: reportExpense}}>
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>  
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/" exact>
                <ReportComponent/>
            </Route>
            <Route path="/insert">
                <FromComponent onAddNewItem={onAddNewItem}/>
                <Transaction items={items} />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataContext.Provider>
)
}
export default App;
