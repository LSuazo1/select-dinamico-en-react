import axios  from 'axios'
import {useEffect} from 'react'

const ListadoProductos = () => {
  
  useEffect(() => {
  
    const traerItems =async ()=>{
        try {

            const resp=await axios('localhost:5000/mostrarImagenes/3',{
                params: {id:3}
            });
            console.log(resp);
        } catch (error) {
            console.log(error);
        }

    }
    traerItems();

  }, [])
  
  
    return (
    <div>ListadoProductos</div>
  )
}

export default ListadoProductos