import { useMemo } from "react";
import "./App.css";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import { useBudget } from "./hooks/useBudget";

function App() {
  const { state } = useBudget();
  console.log(state.budget);

  const isBudgetValid = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de Gastos</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isBudgetValid ? <BudgetTracker /> : <BudgetForm />}
      </div>
    </>
  );
}

export default App;
