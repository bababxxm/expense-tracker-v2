import { createClient } from "@supabase/supabase-js";
import { UUIDTypes, v4 as uuidv4 } from "uuid";
import { ExpenseData, ExpenseItem } from "@/slice/expenseSlice";

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL!;
const supabaseAPIKey = import.meta.env.VITE_PUBLIC_SUPABASE_API_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAPIKey);

export type ExpensePayload = {
  id: UUIDTypes;
  name: string;
  price: number;
  category: string;
  date: string;
};

export const getExpenses = async () => {
  const { data, error } = await supabase.from("expenses").select("*");
  if (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
  return data;
};

export const insertExpense = async (expense: ExpenseItem) => {
  const payload: ExpensePayload = {
    id: uuidv4(),
    name: expense.name,
    price: parseFloat(expense.price),
    category: expense.category,
    date: expense.date,
  };
  const { error } = await supabase.from("expenses").insert([payload]);
  if (error) {
    console.error("Error adding expense:", error);
    return null;
  }
  const expenseData: ExpenseData = {
    ...payload,
    price: payload.price.toString(),
  };
  return expenseData;
};

export const deleteExpense = async (expenseId: UUIDTypes) => {
  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId);
  if (error) {
    console.error("Error deleting expense:", error);
    return false;
  }
  return true;
};
