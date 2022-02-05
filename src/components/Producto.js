import { Component } from 'react'

class Producto extends Component {

    render(){
        console.log(this.props)
    const { producto } = this.props

      return(
         <div>
             <img alt={producto.name} src={producto.img}/>
             <h1>{producto.name}</h1>
             <p>{producto.price}</p>
         </div>
      )

    }

        
   

}

export default Producto