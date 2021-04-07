import { combineReducers } from "redux";
import TaskReducer from "./listTasks";

const rootReducer = combineReducers({ task: TaskReducer });

export default rootReducer;
