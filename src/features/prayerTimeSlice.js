import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const prayerTimeSlice = createSlice({
    name: 'prayTime',
    initialState: {
        prayTime: async () => {
            try {
                await AsyncStorage.getItem('prayTimes')


            } catch (e) {
                console.log(e)
            }
        }
    },
    reducers: {
        setPrayTimes: (state, action) => {
            state.prayTime = action.payload
            async () => {
                try {
                    await AsyncStorage.setItem('prayTimes', state.prayTime);

                } catch (error) {
                    console.log(error)
                }
            };
        },

    }
})

export const setPrayTimes = prayerTimeSlice.actions.setPrayTimes
export default prayerTimeSlice.reducer;
