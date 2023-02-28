import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 94, date: new Date(2022, 2, 29) },
    { id: 'e2', title: 'Paper', amount: 194, date: new Date(2022, 2, 29) },
    { id: 'e3', title: 'Stationary', amount: 494, date: new Date(2022, 2, 29) },
    { id: 'e4', title: 'Drinks', amount: 394, date: new Date(2022, 2, 29) },
  ];
  return (
    <div className="App">
      <div className="container">
        <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </div>
    </div>
  );
}

export default App;
