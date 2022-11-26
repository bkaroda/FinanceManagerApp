import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementNumber,decrementNumber } from './actions';
import { Dashboard } from './components/Dashboard';
import { ExpenseForm } from './components/ExpenseForm';
import { IncomeForm } from './components/IncomeForm';
import { ExpenseList } from './components/ExpenseList';
import { IncomeList } from './components/IncomesList';
import {AllTransaction} from './components/AllTransaction';
// import { ExpenseList } from './components/ExpenseList';

function App() {
  // const myState=useSelector((state)=>state.rootReducer.changeValue);
  //   const dispatch=useDispatch();
  return (
    
   <>
    {/* <Login></Login> */}
    {/* <SignUp></SignUp> */}
    <BrowserRouter>
        <NavigationBar></NavigationBar>
       
      
        {/* {/* <ExpenseList></ExpenseList> */} 
        <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/add-income' element={<IncomeForm/>}></Route>
          <Route path='/add-expense' element={<ExpenseForm/>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/all-expense' element={<ExpenseList/>}></Route>
          <Route path='/all-income' element={<IncomeList></IncomeList>}></Route>
          <Route path='/all-transactions' element={<AllTransaction></AllTransaction>}></Route>
        </Routes>
        
      </BrowserRouter>
      {/* <>{myState}</> */}
      {/* <input type={'button'} value='+' onClick={()=>{dispatch(incrementNumber())}}/> */}
      {/* <input type={'button'} value='-' onClick={()=>{dispatch(decrementNumber())}} /> */}

   </>
  );
}

export default App;
