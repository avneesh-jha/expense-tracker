import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { addIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const currentInput = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();
  function setIncome(e) {
    dispatch(addIncomeAction(parseFloat(e.target.value)));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={currentInput}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          onChange={setIncome}
        />
      </div>
    </div>
  );
}
