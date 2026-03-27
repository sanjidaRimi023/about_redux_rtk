import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    query: "",
    activeTab: "photo",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setResult(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResult (state){
        state.results = []
    }
  },
});
export const { setQuery, setResult, setLoading, setError, setActiveTab } =
  searchSlice.actions;
export default searchSlice.reducer;
