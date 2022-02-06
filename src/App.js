import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
class App extends Component {

  state = {
    productos: [
      { name: 'Tomate' , price: 1500 , img: '/images/tomate.jpg' },
      { name: 'Arbejas' , price: 2500 , img: '/images/arbejas.jpg' },
      { name: 'Lechuga' , price: 500 , img: '/images/lechuga.jpg' },
    ],

    carro: [
      //{ name: 'Tomate' , price: 1500 , img: '/images/tomate.jpg', cant: 1 }
    ],
  }

    agregarAlCarro = (producto) => {

      return this.setState({
        carro: this.state.carro.concat({
          ...producto,
          cantidad: 1,
        })
      })
    }

  



    render(){
      console.log(this.state.carro)
      return(
        <div>
          <Navbar/>
          <Layout>
            <Title/>
            <Productos 
              agregarAlCarro = {this.agregarAlCarro}
              productos = {this.state.productos}
            />
          </Layout>
          
        </div>
      )
    }

      

    

}

export default App;
