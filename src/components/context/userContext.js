import { useQueries } from "react-query";
import { createContext, useContext, useEffect, useState } from "react";




const userContext = createContext()
export const useUser = () => useContext(useContext)
const CurrentUser = (props) => {
const [user, setUser] = useState([])

    // console.log("react-query", useQueries("user", getUser))
//     const {
//         data,
//    dataUpdatedAt,
//    error,
//    errorUpdatedAt,
//    failureCount,
//    isError,
//    isFetched,
//    isFetchedAfterMount,
//    isFetching,
//    isIdle,
//    isLoading,
//    isLoadingError,
//    isPlaceholderData,
//    isPreviousData,
//    isRefetchError,
//    isRefetching,
//    isStale,
//    isSuccess,
//    refetch,
//    remove,
//    status,
//     } = useQueries("user", getUser)


useEffect(()=>{
    const getUser = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL_DEV}/users`, {
                // headers: headers,
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${window.localStorage.getItem("Token")}`,
                }
            })
            if (response.ok){

                const res = await response.json()
                console.log("res", res)
                setUser(res)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    getUser()
},[])

   return (
       <userContext.Provider value={user}>
           {props.children}
       </userContext.Provider>
   )
}
export default CurrentUser
