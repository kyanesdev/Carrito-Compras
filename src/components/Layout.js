import { Component } from "react"

const styles = {}

class Layout extends Component {

    render(){

        return(
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )

    }
}

export default Layout