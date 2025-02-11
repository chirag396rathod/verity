import { createContext, useState } from "react";

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    return (
        <PaginationContext.Provider value={{ limit, setLimit, page, setPage }}>
            {children}
        </PaginationContext.Provider>
    )
}