
import { createContext, useContext } from "react";

export const DataContext = createContext({});

export const useDataProvider =()=> useContext(DataContext);