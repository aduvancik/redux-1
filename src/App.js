import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, addManyCustomerAction, deleteCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asynkActions/customers';
import Category from './components/Category';

function App() {
  const cash = useSelector(state => state.cash.cash); // Отримуємо поточне значення cash з Redux
  const customers = useSelector(state => state.customers.customers); // Отримуємо поточне значення cash з Redux
  const dispatch = useDispatch(); // Диспетчер для відправлення дій

  const addCash = () => {
      dispatch({ type: "ADD_CASH", payload: 10 });
  };

  const getCash = () => {
      dispatch({ type: "GET_CASH", payload: 5 });
  };

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer));
  }

  const deleteCustomer = () => {
    dispatch(deleteCustomerAction());
  }

  function* generator() {
    for (let i = 0; i < 5; i++) {
      yield i
    }
  }

   const iter = generator();
  console.log(iter.next(),"la");
  console.log(iter.next(),"la");
  console.log(iter.next(),"la");
  console.log(iter.next(),"la");
  console.log(iter.next(),"la");  
  console.log(iter.next(),"la");  
  console.log(iter.next(),"la");  
  console.log(iter.next(),"la");  
  console.log(iter.next(),"la");  

  return (
      <div>
          <h1>Cash: {cash}</h1>
          <button onClick={addCash}>Add Cash</button>
          <button onClick={getCash}>Get Cash</button>
          <p>______</p>
          <button onClick={() =>addCustomer(prompt())}>Add customer</button>
          <button onClick={()=>deleteCustomer()}>delete customer</button>
          <button onClick={()=>dispatch(fetchCustomers())}>add many customer</button>

          <p>______________</p>
          {customers.length > 0 ?
          <div>
            {customers.map(customer => 
              <div key={customer.id}onClick={() =>removeCustomer(customer.id)}>{customer.name}</div>
            )}
          </div>
        :
        <p>lenght = 1 </p>
          }
          <Category />
      </div>
  );
}

export default App;
