import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalStatus: false,
  modalConfig: {
    title : '',
    description : '',
    body : null ,
    buttons : []
  }
}

export const modalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalStatus = true
    },
    closeModal: (state) => {
      state.modalStatus = false
    },
    setModalConfig: (state , action) => {
      state.modalConfig = action.payload
    },
  },
})

export const { openModal, closeModal , setModalConfig } = modalSlice.actions

export default modalSlice.reducer