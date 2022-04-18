import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFundActionCreator, withdrawFundActionCreator } from './redux/actionCreators/actionCreators';


function App() {


  let dataaccess = useSelector((storeObject)=>{
    return storeObject;
  });

  let dispatch = useDispatch()

let addAmount = ()=>{ 
  //alert('addAmount');

  let amount = parseInt(prompt("Enter the Add Amount"));

  dispatch(addFundActionCreator(amount));
}

let withDrawAmount = ()=>{ 
  //alert('withDrawAmount');

  let amount = parseInt(prompt("Enter the Add Amount"));

  dispatch(withdrawFundActionCreator(amount));
}


  return (
    <div className="App">
      <header className="App-header">
       <div>Total Amount {dataaccess}</div>
       <div>
         <button onClick={()=>{ addAmount()}}>Add Amount</button>
         <button onClick={()=>{withDrawAmount()}}>Withdraw Amount</button>
       </div>
      </header>
    </div>
  );
}

export default App;
