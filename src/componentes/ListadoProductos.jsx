import axios from 'axios'
import { useEffect, useState } from 'react'
import Producto from './Producto';

const ListadoProductos = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {

        const traerItems = async () => {
            try {
                const { data } = await axios('http://localhost:5000/mostrarImagenes/3');
                const { items } = data
                setItem(items);
            } catch (error) {
                console.log(error);
            }

        }
        traerItems();

    }, [setItem]);

    return (
        <>
            <div>ListadoProductos</div>
            {items.map(item =>
                <Producto
                    key={item.idItem}
                    item={item}
                />
                
            )}
        </>

    )
}

export default ListadoProductos