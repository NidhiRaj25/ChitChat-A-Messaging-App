import { useState,useEffect,useRef } from "react";
import {io} from "socket.io-client";
import { createContext } from "react";

// making context using createacontext and store in AccountContext. so AccountContext is our context and use export keyword to export that context
export const AccountContext = createContext(null);

//  taking messenger as children with props
const AccountProvider = ({ children }) => {

  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])


  return (
    <div>
        {/* inside .provider the value attributes (object) can be exported  */}
      <AccountContext.Provider value={{ 
        account,
        setAccount,
        person,
        setPerson ,
        activeUsers,
        setActiveUsers,
        socket,
        newMessageFlag,
        setNewMessageFlag
        }}>
        {/* forwording messenger as a children */}
        {children}
      </AccountContext.Provider>
    </div>
  );
};

export default AccountProvider;
