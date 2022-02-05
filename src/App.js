import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate' , price: 1500 , img: '/images/tomate.jpg' },
      { name: 'Arbejas' , price: 2500 , img: '/images/arbejas.jpg' },
      { name: 'Lechuga' , price: 500 , img: '/images/lechuga.jpg' },
    ]
  }

    render(){
      return(
        <div>
          <Layout>
            <Productos 
              agregarAlCarro = {()=>console.log('No hace nada')}
              productos = {this.state.productos}
            />
          </Layout>
          
        </div>
      )
    }

      

    

}

export default App;
