
import UserContext from './UserContext';
import { useState } from 'react';
// here userContextPorvider is a Call Backfunciton that 
// will allow us to access the value provided or are going to used
// here childern inside the parameters means that what ever 
//comes in allow them to access the values
const  UserContextProvider =({children})=>
{
       // write the value that are needed to be accessed inside a hook
       let [User , SetUser] = useState(null);
      
       
       // can ne null or empty object {}
       // Now write the return statemnt
       return(
        // wrap the return statment inside the Conxtet Provider given by REACT

        // give the provide the values that are needed or defined in useStare
        // The number of values can be any by giving it inside an object
        // {clidern} defines the components that will be there can use manual compnents as well
        <UserContext.Provider  value={{User, SetUser}}>
            {children}  

        </UserContext.Provider>
       )
        
}











export default UserContextProvider;