import {createSlice} from '@reduxjs/toolkit';

const initialOrderSettings = {
    settings: {
        budget: null,
        location: null,
        personCount: 1
    }
};

const orderSettingsSlice = createSlice({
    name: 'orderSettings',
    initialState: initialOrderSettings,
    reducers: {
        updateSettings(state, action) {
            state.settings = {...state.settings, ...action.payload};
        },
        resetOrderSettings(state) {
            state.settings = initialOrderSettings.settings;
        }
    }
});

export const {updateSettings, resetOrderSettings} = orderSettingsSlice.actions;

export default orderSettingsSlice.reducer;

//E.G.
// dispatch(updateSettings({ budget: 100, location: 'Downtown' }));