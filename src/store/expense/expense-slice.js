const { createSlice } = require("@reduxjs/toolkit");

export const expenseslice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", price: 1.0 },
      { name: "banana", price: 2.0 },
    ],
  },
});
