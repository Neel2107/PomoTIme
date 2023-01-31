const reducer = (state = {}, action) =>{
    console.log(action.type)
    console.log("dispatching:",action)
    console.groupEnd(action.type)
    switch(action.type){
        case "started_timer":
            return{
                
            }
            case "stopped_timer":
                return{
                    
                }
    }
}