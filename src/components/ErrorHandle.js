import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

// const errorHandling = WrappedComponent => ({ handleDismiss, error, children }) => {
    
//     return (
//         <WrappedComponent>
//             {error ? <Message onDismiss={() => handleDismiss} content={error}/> : null}
//             {children}
//         </WrappedComponent>
//     )
// }

const errorHandling = WrappedComponent => {
    return class extends Component {
        state = {
            visible: true
        }

        handleDismiss = (e) => {
           console.log("This is the handle dismiss: ", e)
            this.setState({
                visible: false
            })
        }

        render(){
            return (
                 <WrappedComponent>
                    { this.props.error ? <Message onDismiss={this.handleDismiss} content={this.props.error}/> : null }
                    { this.props.children }
                </WrappedComponent>
            )
        }
    }
}
    
const DivWithErrorHandling = errorHandling(({ children }) => <div>{children}</div>)

export default DivWithErrorHandling