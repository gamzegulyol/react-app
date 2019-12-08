
const initialState=[
        {
            name:'test',
            completed: false
        }
    
    ];

export default (state = initialState,action)=>{
    console.log("action:",action);
    console.log("state:",state);
    switch(action.type){
        case 'todo/add_todo':
            state.push({name:action.data, completed: false});
            return{
                ...state,
            }
        default:
            return state;
          
    }

}