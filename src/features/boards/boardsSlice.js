import { createSlice } from "@reduxjs/toolkit"

const defaultBoards = [
    {
        name: "Platform Launch",
        slug: "platform-launch"
    },
    {
        name: "Marketing Plan",
        slug: "marketing-plan"
    }
]

export const boardsSlice = createSlice({
    name: "boards",
    initialState: defaultBoards,
    reducers: {
        addBoard: (state, {payload}) => {
            return [...state, payload]
        },
        deleteBoard: (state, {payload}) => {
            return state.filter(board => board.slug !== payload)
        }
    }
})

export const { addBoard, deleteBoard } = boardsSlice.actions

export default boardsSlice.reducer