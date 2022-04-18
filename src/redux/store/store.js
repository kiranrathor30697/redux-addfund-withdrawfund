import { createStore } from "redux";
import {rootReducer} from "../rootReducer/rootReducer";

export const storeObject = createStore(rootReducer,1000);