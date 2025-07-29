import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialTeacherData, ITeacher } from "./teacherSlice.type";
import { Status } from "@/lib/types/type";

const initialState: IInitialTeacherData = {
  teacher: {
    teacherEmail: "",
    teacherName: "",
    teacherPhoneNumber: "",
  },
  status: Status.LOADING,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setTeacher(state: IInitialTeacherData, action: PayloadAction<ITeacher>) {
      state.teacher = action.payload;
    },
    setStatus(state: IInitialTeacherData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { setTeacher, setStatus } = teacherSlice.actions;
export default teacherSlice.reducer;
