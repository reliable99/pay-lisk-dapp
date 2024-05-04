import { createContext, useState } from "react";

const PayLiskContext = createContext();


export const PayLiskProvider = ({children}) => {
    const [isReload, setIsReload] = useState(false);

    return(
        <PayLiskContext.Provider value={{isReload, setIsReload}}>
            {children}
        </PayLiskContext.Provider>
    )
}

export default PayLiskContext;