import React from 'react'

const initialAuthentication=false;
const withAuthenticationHOC = (Component) => {
    return ()=> {
        if(!initialAuthentication){
            return "Not Authenticated"
        }
        return <Component />
    }
    
}

export default withAuthenticationHOC
