import axiosInstance, { asyncHandler, URL } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  loading: boolean | undefined;
  tasks: Task[];
  error: string | null;
}

const initialState: TaskState = {
  loading: undefined,
  tasks: [],
  error: null,
};

// Async Thunks
export const fetchTasks = createAsyncThunk<Task[], void, { rejectValue: string }>("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  const [response, error] = await asyncHandler(() => axiosInstance.get(URL.TASKS));
  if (error) {
    return rejectWithValue(error.message || "Failed to fetch tasks");
  }
  return response.data;
});

export const createTask = createAsyncThunk<Task, string, { rejectValue: string }>("tasks/createTask", async (task, { rejectWithValue }) => {
  const [response, error] = await asyncHandler(() => axiosInstance.post(URL.TASKS, { title: task }));
  if (error) {
    return rejectWithValue(error.message || "Failed to create task");
  }
  return response.data;
});

export const updateTask = createAsyncThunk<Task, number, { rejectValue: string }>("tasks/updateTask", async (id, { rejectWithValue }) => {
  // const [response, error] = await asyncHandler(() => axiosInstance.patch(`${URL.TASKS}/${id}`, { completed: true }));
  const [response, error] = await asyncHandler(() => axiosInstance.patch(`${URL.TASKS}/${id}`, { completed: true }));
  if (error) {
    return rejectWithValue(error.message || "Failed to update task");
  }
  return response.data;
});

export const deleteTask = createAsyncThunk<number, number, { rejectValue: string }>("tasks/deleteTask", async (id, { rejectWithValue }) => {
  const [, error] = await asyncHandler(() => axiosInstance.delete(`${URL.TASKS}/${id}`));
  if (error) {
    return rejectWithValue(error.message || "Failed to delete task");
  }
  return id;
});

// Slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch tasks
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Unable to fetch tasks";
    });

    // Create task
    builder.addCase(createTask.fulfilled, (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.error = action.payload || "Unable to create task";
    });

    // Update task
    builder.addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.error = action.payload || "Unable to update task";
    });

    // Delete task
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.loading = false;
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Unable to delete task";
    });
  },
});

export default taskSlice.reducer;
