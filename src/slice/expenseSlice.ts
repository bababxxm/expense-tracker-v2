import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getExpenses, insertExpense, deleteExpense } from "../supabase";
import { UUIDTypes } from "uuid";
import sortedExpense from "@/utils/sortedExpense";
import formatedDate from "@/utils/formatedDate";

export type ExpenseItem = {
  name: string;
  price: number | string;
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
  flagSort: string;
  filterMonth: string;
}

const initialState: ExpenseState = {
  data: [],
  transformedData: [],
  expenseItem: {
    name: "",
    price: "",
    category: "",
    date: formatedDate(new Date().toLocaleDateString()),
  },
  flagSort: "asc",
  filterMonth: "0",
};

export const fetchExpense = createAsyncThunk(
  "expense/fetchExpense",
  async (_payload, thunkAPI) => {
    try {
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
      const newExpenseData = await insertExpense(payload);
      return newExpenseData;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Network error");
    }
  }
);

export const removeExpense = createAsyncThunk(
  "expense/deleteExpense",
  async (payload: UUIDTypes, thunkAPI) => {
    try {
      const deleteResult = await deleteExpense(payload);
      if (deleteResult) {
        return payload;
      }
      return "";
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
    sortExpenseData: (state, action: PayloadAction<{ value: string }>) => {
      const filteredData = state.data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() + 1 === +state.filterMonth;
      });

      state.flagSort = action.payload.value;
      const sortedData = sortedExpense(filteredData, action.payload.value);
      state.transformedData = sortedData;
    },
    filterByMonth: (state, action: PayloadAction<string>) => {
      state.filterMonth = action.payload;
      if (action.payload === "0") {
        state.transformedData = sortedExpense(state.data, state.flagSort);
      } else {
        const filteredData = state.data.filter((item) => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() + 1 === +action.payload;
        });
        state.transformedData = sortedExpense(filteredData, state.flagSort);
      }
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

    builder.addCase(
      addExpense.fulfilled,
      (state, action: PayloadAction<ExpenseData | null>) => {
        if (action.payload) {
          state.data.push(action.payload);
          state.filterMonth = "0";
          const sortedData = sortedExpense(state.data, state.flagSort);
          state.transformedData = sortedData;
        }
      }
    );

    builder.addCase(
      removeExpense.fulfilled,
      (state, action: PayloadAction<UUIDTypes | string>) => {
        if (action.payload !== "") {
          state.data = state.data.filter((item) => item.id !== action.payload);
          if (state.filterMonth === "0") {
            state.transformedData = sortedExpense(state.data, state.flagSort);
          } else {
            const filteredData = state.data.filter((item) => {
              const itemDate = new Date(item.date);
              return itemDate.getMonth() + 1 === +state.filterMonth;
            });
            state.transformedData = sortedExpense(filteredData, state.flagSort);
          }
        }
      }
    );
  },
});

export const {
  inputExpenseItem,
  updateExpenseData,
  sortExpenseData,
  // deleteExpenseData,
} = expenseSlice.actions;
export default expenseSlice.reducer;
