import { createSlice } from "@reduxjs/toolkit";

const intial= {
    changed: false,
    userEmail: localStorage.getItem("currentEmail") || "",
    items: [],
  }
  const MailSlice=createSlice({
    name:"mail",
    initialState:intial,
    reducers:{
        getMails(state, action) {
            state.items = action.payload;
          },
         mailsItem (state, action) {
            state.items.push(action.payload);
            state.changed = true;
          },
          userLoginEmail(state, action) {
            state.userEmail = action.payload;
          },
          deleteEmail(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.changed = true;
          },
          checkedMail(state, action) {
            state.items = state.items.map((item) => {
              if (item.id === action.payload) {
                return { ...item, clicked: "success" };
              }
              return item;
            });
            state.changed = true;
          },
        },
    }
    
  )
export const DataSliceActions = DataSlice.actions;
export default DataSlice;