import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectLang = createSlice({
    name: 'SelectLang',
    initialState: {
        Lang: async () => {
            try {
                await AsyncStorage.getItem('selectedLang')


            } catch (e) {
                console.log(e)
            }
        }
    },
    reducers: {
        setLang: (state, action) => {
            state.Lang = action.payload
            async () => {
                try {
                    await AsyncStorage.setItem('selectedLang', state.Lang);

                } catch (error) {
                    console.log(error)
                }
            };
        },

    }
})

export const setLang = SelectLang.actions.setLang
export default SelectLang.reducer;
