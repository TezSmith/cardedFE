import React from 'react'

const errorHandling = WrappedComponent => ({ error, children }) => {
    return (
        <WrappedComponent>
            {<div className="error-message">{error}</div>}
            {children}
        </WrappedComponent>
    )
}
    
const DivWithErrorHandling = errorHandling(({ children }) => <div>{children}</div>)


export default DivWithErrorHandling