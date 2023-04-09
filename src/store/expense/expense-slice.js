const { createSlice } = require("@reduxjs/toolkit");

export const expenseslice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", price: 1.0 },
      { name: "banana", price: 2.0 },
    ],
  },
  reducers: {
    addExpenseAction: (currenrSlice, value) => {
      console.log("addExpenseAction done");
      currenrSlice.expenseList.push(value.payload);
    },
    //
    //
  },
});

export const { addExpenseAction } = expenseslice.actions;
