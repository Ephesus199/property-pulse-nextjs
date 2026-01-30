'use client';
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/app/action/getUnreadMessageCount";
const GlobalContext = createContext();
// Create Provider

export function GlobalProvider({ children }) {
    const { data: session } = useSession();

    useEffect(() => {
        if (session && session.user) {
            getUnreadMessageCount().then(res => {
                if(res.count) setUnReadCount(res.count)
            })
        }
    },[getUnreadMessageCount,session])
    const [unReadCount, setUnReadCount] = useState(0);
    return <GlobalContext.Provider value = {{ unReadCount, setUnReadCount }}>{ children}</GlobalContext.Provider>
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}