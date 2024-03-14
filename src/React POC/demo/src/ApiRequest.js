const apiRequest = (url='',optionsObj=null,errMsg=null) =>{
    
    try{
        const response = fetch(url,optionsObj);
        if(!response.ok) throw Error("404 not found");
    }
    catch(err){
        errMsg=err.Message;
    }
    finally{
        return errMsg;
    }

}

export default apiRequest