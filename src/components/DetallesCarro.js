import { Component } from 'react'

const styles = {
    DetallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 15
    },

    ul:{
        
        margin: 0,
        padding: 0

    },

    li:{
        listStyle:  'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    },
}

class DetallesCarro extends Component {

    render() {
        const {carro} = this.props
        console.log(carro)
        return(
            <div style={styles.DetallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li key={x.name} style={styles.li}>
                        <img alt={x.name} src={x.img} width='50' height='32' style={styles.img}/> 
                        {x.name} <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }

}

export default DetallesCarro