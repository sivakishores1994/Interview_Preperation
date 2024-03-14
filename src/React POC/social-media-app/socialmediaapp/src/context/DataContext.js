import { createContext } from "react";

const DataContext = createContext({});

 const DataProvider = ({children}) => {
    // const handlePostTitle = (e) => {
    //     setPostTitle(e.target.value);
    //     console.log(e.target.value)
    //   }
      
      return (
        <DataContext.Provider value={{
            // handlePostTitle
        }}>
            {children}
        </DataContext.Provider>
      )
}

export {DataContext}
export default DataProvider;