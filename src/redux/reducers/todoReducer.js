
const initialState={
    todos:[
        {
            name:'test',
            completed: false
        }
    ]
};

export default (state = initialState,action)=>{
    console.log("action:",action);
    console.log("state:",state);
    switch(action.type){
        default:
            return state;
            break;
    }

}