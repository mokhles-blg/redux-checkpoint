import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import ListTasks from "./Components/ListTasks/ListTasks";

function App() {
  return (
    <div className="App">
      <h2>To Do Application</h2>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
