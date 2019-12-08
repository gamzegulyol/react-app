const addTodo = todo =>{
    const result = {
        type: 'add_todo',
        data : todo
    }
    return result;
};

export {addTodo}
