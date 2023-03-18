import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {api_instance} from "../../api/api_instance"

const initialState = {
  users: [],
  page: 0,
  total_pages: null,
  total_users: null,
  isLoading: false
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page = 1) => {
    const {data} = await api_instance.get(`/users?page=${page}&count=6`)
    return data
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.users = []
      state.page = 0
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const {users, page, total_pages, total_users} = action.payload
      state.users = [...state.users, ...users]
      state.total_pages = total_pages
      state.total_users = total_users
      state.page = state.page + 1
      state.isLoading = false
    })
    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true
    })
  },

})
export default usersSlice.reducer
export const {resetUser} = usersSlice.actions