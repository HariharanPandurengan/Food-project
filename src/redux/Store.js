import {configureStore,createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: [],
    tp: 0,
    count: 0,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        foodData:(state,action)=>{
                
                if(!(state.value.map(list=>list.name).includes(action.payload.name)))
                {
                    state.count = state.value.length+1;
                    state.value.push(action.payload);
                    state.tp = state.value.reduce((a,b)=>{
                        return a += b.count * b.amount;
                    },0)
                }
                else{
                    state.value.map(list=>{
                        if(list.name.includes(action.payload.name))
                        {
                            list.count += 1;
                            state.tp = state.value.reduce((a,b)=>{
                                return a += b.count * b.amount;
                            },0)
                        }
                        return list;
                    })
                }
        },
        clearCart:(state)=>{
            state.count = 0;
            state.totalPrice = 0;
            state.totalPriceArray = [];
            state.value = [];
        },
        minusItem:(state,action)=>{
            
            state.value.map((list)=>{
               if(list.name.includes(action.payload)){
                 list.count -= 1
               }
               if(list.count === 0){
                state.value = state.value.filter(obj => obj.name !== list.name);
                console.log(state.value)
                state.count = state.value.length;
               }
               return list
            })
            state.tp = state.value.reduce((a,b)=>{
                return a += b.count * b.amount;
            },0)
        },
        plusItem:(state,action)=>{
            state.value.map((list)=>{
                if(list.name.includes(action.payload)){
                  list.count += 1
                }
                return list
             })
             state.tp = state.value.reduce((a,b)=>{
                 return a += b.count * b.amount;
             },0)
        },
    }
});

export const {foodData,clearCart,minusItem,plusItem} = userSlice.actions;

export const store =  configureStore({
    reducer: {
        user:userSlice.reducer
    }
});