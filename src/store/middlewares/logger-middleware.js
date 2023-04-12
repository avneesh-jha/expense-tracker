import { createListenerMiddleware } from "@reduxjs/toolkit";
export const loggerMiddlewares = createListenerMiddleware();
loggerMiddlewares.startListening({
  predicate: (action) => {
    return true;
  },
  effect: async (action) => {
    console.log(action);
  },
});
