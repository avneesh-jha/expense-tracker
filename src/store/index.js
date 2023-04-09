import { configureStore } from "@reduxjs/toolkit";
import { expenseslice } from "./expense/expense-slice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseslice.reducer,
    AUTH: () => "Authenticated",
  },
});

export { store };
