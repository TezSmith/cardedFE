import React, {Component, useState} from 'react'
import { Message } from 'semantic-ui-react'

const errorHandling = WrappedComponent => ({ error, children }) => {
     const [visible, setVisible] = useState(true);

     return (
         <WrappedComponent>
            {error && visible ? <Message onDismiss={() => setVisible(false)} content={error}/> : null}
            {children}
        </WrappedComponent>

    )
}

const DivWithErrorHandling = errorHandling(({ children }) => <div>{children}</div>)

export default DivWithErrorHandling
