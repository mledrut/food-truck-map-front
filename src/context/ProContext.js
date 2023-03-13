import React, { useState } from "react"

const ProContext = React.createContext([{}, () => { }])

let initialState = {}

const ProProvider = props => {
    const [state, setState] = useState(initialState)

    return (
        <ProContext.Provider value={[state, setState]}>
            {props.children}
        </ProContext.Provider>
    )
}

export { ProContext, ProProvider }