import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const {User} = useContext(UserContext)
   
    
    
    
    
    
    if (!User) return <div className='Wc'>please login
    
    </div>

    return <div className='Wc'>Welcome {User.UserName} and Email {User.Email}:
    
    
    </div>
}

export default Profile 