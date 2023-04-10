const { createSlice } = require("@reduxjs/toolkit");

export const expenseslice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    income: 100,
  },
  reducers: {
    addExpenseAction: (currentSlice, value) => {
      console.log("addExpenseAction done");
      currentSlice.expenseList.push(value.payload);
    },
    addIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    //
    //
  },
});

export const { addExpenseAction, addIncomeAction } = expenseslice.actions;
