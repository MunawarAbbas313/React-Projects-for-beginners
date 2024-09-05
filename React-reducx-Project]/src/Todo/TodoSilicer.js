import { createSlice , nanoid } from "@reduxjs/toolkit";
// After Importing the createslice from the redux
// first step is to initialeState in whih we define the structre of that particullar part of the application 
// here todos is an array with an object inside with an id and a text message 
const initialState = {
    todos : [{ id:1 , textMsg : "Hello World"}]
}
// now create the slice here 
// name is default prroperty 
// initailsate a varbile that holds todos
// reducers contains the methods with decleartion and defination as in context api we only declare them 
// but in redux we have to define the functionality as well
export const TodoSilcer = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state , action  )=>{
            const todo = {
                id : nanoid(),
                textMsg : action.payload
            }
            // here now push the created todo to the state 
            // we have used push becaues its an array with an object 
            state.todos.push(todo)
        },
        removeTodo : (state , action)=>{
            // here we have to find the index of the todo that we want to remove
            // we will use filter method to match the if matched then remove it 
            // an keep rest once as they are 
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        upDateTodo: (state, action) => {
            const { id, textMsg } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
              todo.textMsg = textMsg;
            }
          }


        }
    }
)
// we have to speratly export the different methods as well as the reducer
// we will change the state using the addtodo and remove todo 
// so each functionality will be used individually 
export const {addTodo , removeTodo , upDateTodo} = TodoSilcer.actions;
// to provide awarness of all the reducers to store we will export the reducer
export default TodoSilcer.reducer;