import React, {Component, useState} from 'react'
import { Message } from 'semantic-ui-react'

const errorHandling = WrappedComponent => ({ error, children }) => {
     const [visible, setVisible] = useState(true);

     const handleDismiss = () => {
         console.log("Yo")
     }
     
     return (
         <WrappedComponent>
            {error ? <Message onDismiss={handleDismiss} content={error}/> : null}
            {children}
        </WrappedComponent>
        
    )
}

// const errorHandling = WrappedComponent => {
//     return class extends Component {
        
//         state = {
//             visible: true
//         }

//         handleDismiss = (e) => {
//           console.log('in handle dismiss: ', e)
//         //   this.setState({
//         //         visible: false
//         //     })
//         }

//         render(){
//             console.log("this is the error state: ", this.state)
//             return (
//                  <WrappedComponent>  
//                     { this.props.error && this.state.visible ? <Message onDismiss={this.handleDismiss} content={this.props.error}/> : null }
//                     { this.props.children }
//                 </WrappedComponent>
//             )
//         }
//     }
// }
    
const DivWithErrorHandling = errorHandling(({ children }) => <div>{children}</div>)

export default DivWithErrorHandling