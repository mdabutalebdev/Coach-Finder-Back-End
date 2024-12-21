import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchGroups = createAsyncThunk('fetchGroups', async () => {
    const rsl = await axios.get('http://77.37.74.82:5000/api/groups/get-all-groups');
    let res = await rsl.data
    return res.groups
});

export const searchFeatch = createAsyncThunk('searchFeatch', async (name) => {

    const rsl = await axios.get(`http://77.37.74.82:5000/api/groups/get-all-groups?group_name=${name}`);
    let res = await rsl.data

    if (res.total == 0) {
        return []
    } else {
        return res.groups
    }


});

export const deleteGroup = createAsyncThunk('deleteGroup', async (id) => {
    let token = localStorage.getItem("adminAuthToken");
    const rsl = await axios.delete(`http://77.37.74.82:5000/api/groups/delete-group/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
            }
        }
    );

    return id

});

export const FilterSlice = createSlice({
    name: 'FilterSlice',
    initialState: {
        dataInfo: [],
        isLoading: false,
        isError: false,
        searchData: null,
        toastName: "‘Torque’"
    },

    reducers: {
        toastFunc: (state, action) => {
            let name = state.dataInfo.find((item) => item._id === action.payload);
            state.toastName = name.group_name
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchGroups.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGroups.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dataInfo = action.payload;
            })
            .addCase(fetchGroups.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            })

        // searchFeatch start 
        builder
            .addCase(searchFeatch.pending, (state, action) => {
                state.searchData = "loadding";
            })
            .addCase(searchFeatch.fulfilled, (state, action) => {
                state.dataInfo = action.payload;
            })
            .addCase(searchFeatch.rejected, (state, action) => {
                state.searchData = action.payload;
            })
        // searchFeatch end 

        // deleteGroup start 
        builder
            .addCase(deleteGroup.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteGroup.fulfilled, (state, action) => {
                state.dataInfo = state.dataInfo.filter(item => item._id !== action.payload);
            })
            .addCase(deleteGroup.rejected, (state, action) => {
                state.isError = false;
            })
        // deleteGroup end 

    }
})

// Action creators are generated for each case reducer function
export const { toastFunc } = FilterSlice.actions

export default FilterSlice.reducer