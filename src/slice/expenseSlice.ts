import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExpenseItem = {
  name: string;
  price: number;
  category: string;
  date: string;
};

export type ExpenseData = ExpenseItem & {
  id: number;
};

export type ExpenseInputPayload = {
  key: keyof ExpenseItem;
  data: string | number;
};

interface ExpenseState {
  data: ExpenseData[];
  filteredData: ExpenseData[];
  expenseItem: ExpenseItem;
}

const initialState: ExpenseState = {
  data: [],
  filteredData: [],
  expenseItem: {
    name: "",
    price: 0,
    category: "",
    date: "2022-09-28",
  },
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    inputExpenseItem: (state, action: PayloadAction<ExpenseInputPayload>) => {
      const { key, data } = action.payload;
      state.expenseItem = { ...state.expenseItem, [key]: data };
    },
    addExpenseData: (state, action: PayloadAction<ExpenseData>) => {
      state.data.push(action.payload);
    },
    updateExpenseData: (state, action: PayloadAction<ExpenseData[]>) => {
      state.data = action.payload;
    },
    deleteExpenseData: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    sortExpenseData: (state, action: PayloadAction<"asc" | "desc">) => {
      state.data.sort((a, b) => {
        const dateA = a.date.split("/");
        const dateB = b.date.split("/");
        const formattedA = `${dateA[2]}-${dateA[0]}-${dateA[1]}`;
        const formattedB = `${dateB[2]}-${dateB[0]}-${dateB[1]}`;
        return action.payload === "asc"
          ? formattedA.localeCompare(formattedB)
          : formattedB.localeCompare(formattedA);
      });
    },
  },
});

export const {
  inputExpenseItem,
  addExpenseData,
  updateExpenseData,
  sortExpenseData,
} = expenseSlice.actions;
export default expenseSlice.reducer;
