import { configureStore } from '@reduxjs/toolkit'
import FilterSlice from './FilterSice'
export default configureStore({
    reducer: {
        FilterSlice: FilterSlice
    },
})