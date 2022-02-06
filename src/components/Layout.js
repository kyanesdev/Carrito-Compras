import { Component } from "react"

const styles = {
    layout: {
        backgroundColor: '#FFFF',
        color: '#0a283e',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        
    },

    container: {
        width: '1200px'
        
    }
}

class Layout extends Component {

    render(){

        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
                
            </div>
        )

    }
}

export default Layout