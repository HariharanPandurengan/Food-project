import {configureStore,createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: [],
    totalPriceArray:[],
    totalPrice: 0,
    count: 0,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        foodData:(state,action)=>{
                
                if(!(state.value.map(list=>list.name).includes(action.payload.name)))
                {
                    state.count += 1;
                    state.value.push(action.payload);
                    state.totalPriceArray.push(action.payload);
                    state.totalPrice = state.totalPriceArray.reduce((accumulator, foodObject) => {
                        return accumulator + foodObject.amount;
                      }, 0);
                }
                else{
                    state.value.map(list=>{
                        if(list.name.includes(action.payload.name))
                        {
                            list.count += 1;
                            state.totalPriceArray.push(action.payload);
                            state.totalPrice = state.totalPriceArray.reduce((accumulator, foodObject) => {
                                return accumulator + foodObject.amount;
                              }, 0);
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
        }
    }
});

export const {foodData,clearCart} = userSlice.actions;

export const store =  configureStore({
    reducer: {
        user:userSlice.reducer
    }
});