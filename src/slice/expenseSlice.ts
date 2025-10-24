import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getExpenses, insertExpense } from "../supabase";
import { UUIDTypes } from "uuid";

export type ExpenseItem = {
  name: string;
  price: number;
  category: string;
  date: string;
};

export type ExpenseData = ExpenseItem & {
  id: UUIDTypes;
};

export type ExpenseInputPayload = {
  key: keyof ExpenseItem;
  data: string | number;
};

interface ExpenseState {
  data: ExpenseData[];
  transformedData: ExpenseData[];
  expenseItem: ExpenseItem;
}

const initialState: ExpenseState = {
  data: [],
  transformedData: [],
  expenseItem: {
    name: "",
    price: 0,
    category: "",
    date: "2022-09-28",
  },
};

export const fetchExpense = createAsyncThunk(
  "expense/fetchExpense",
  async (_payload, thunkAPI) => {
    try {
      console.log("Fetching expenses from Supabase...");
      const res = await getExpenses();
      if (res.length !== 0) {
        const data = res.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          category: item.category,
          date: item.date,
        }));
        return data;
      }
      return [];
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Network error");
    }
  }
);

export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async (payload: ExpenseItem, thunkAPI) => {
    try {
      console.log("Adding expenses from Supabase...");
      const newExpenseData = await insertExpense(payload);
      return newExpenseData;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Network error");
    }
  }
);

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    inputExpenseItem: (state, action: PayloadAction<ExpenseInputPayload>) => {
      const { key, data } = action.payload;
      state.expenseItem = { ...state.expenseItem, [key]: data };
    },
    updateExpenseData: (state, action: PayloadAction<ExpenseData[]>) => {
      state.data = action.payload;
    },
    // deleteExpenseData: (state, action: PayloadAction<number>) => {
    //   state.data = state.data.filter((item) => item.id !== action.payload);
    // },
    sortExpenseData: (state, action: PayloadAction<string>) => {
      const cpyData = [...state.data];
      cpyData.sort((a, b) => {
        return action.payload === "asc"
          ? a.date.localeCompare(b.date)
          : b.date.localeCompare(a.date);
      });
      state.transformedData = cpyData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpense.pending, (state) => {
        state.data = [];
        state.transformedData = [];
      })
      .addCase(
        fetchExpense.fulfilled,
        (state, action: PayloadAction<ExpenseData[]>) => {
          state.data = action.payload;
          state.transformedData = action.payload;
        }
      )
      .addCase(fetchExpense.rejected, (state, action) => {
        state.data = [];
        state.transformedData = [];
        console.error("Error fetching expenses:", action.payload);
      });
      
    builder
      .addCase(
        addExpense.fulfilled,
        (state, action: PayloadAction<ExpenseData | null>) => {
          if (action.payload) {
            state.data.push(action.payload);
            state.transformedData.push(action.payload);
          }
        }
      )
  },
});

export const {
  inputExpenseItem,
  updateExpenseData,
  sortExpenseData,
  // deleteExpenseData,
} = expenseSlice.actions;
export default expenseSlice.reducer;
