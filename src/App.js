import { Component } from 'react'
import Productos from './components/Productos'

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate' , price: 1500 , img: '/public/logo192.png' },
      { name: 'Arbejas' , price: 2500 , img: '/public/images/arbejas.jpg' },
      { name: 'Lechuga' , price: 500 , img: '/public/images/lechuga.jpg' },
    ]
  }

    render(){
      return(
        <div>
          <Productos 
            agregarAlCarro = {()=>console.log('No hace nada')}
            productos = {this.state.productos}
          />
        </div>
      )
    }

      

    

}

export default App;
