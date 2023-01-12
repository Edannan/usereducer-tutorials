export const reducer = (state, action) => {
    if(action.type === "INSERT"){
        const newPeople = [...state.people, action.payload]
        return (
            {...state, people:newPeople, modalMode: true,
            modalInfo: 'Person added'}
        )
    }
    if(action.type === "VALUELESS"){
        return(
            {...state, modalMode: true, modalInfo: 'Please enter value'}
        )
    }
    if(action.type === "ENDMODAL"){
        return(
            {...state, modalMode: false}
        )
    }
    if(action.type === "REMOVE"){
        const newPeople = state.people.filter((person) => {
            return person.id !== action.payload;
        })
        return(
            {...state, people:newPeople}
            )
        }

        throw new Error("no matching action")

    }