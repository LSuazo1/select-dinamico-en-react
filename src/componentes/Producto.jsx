import { useState, useEffect } from 'react'
import axios from 'axios'
const Producto = ({ item }) => {
    console.log(item.nombre);
    const [image, setImage] = useState("");

    /*  const { data } = await axios('http://localhost:5000/mostrar/5');
     console.log(data);
     return data; */
    useEffect(() => {
        const getImagen = async (nombre) => {
            axios.get(`http://localhost:5000/mostrar/${nombre}`, {
                responseType: "arraybuffer"
            })
                .then((res) => {
                    const base64 = btoa(
                        new Uint8Array(res.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ''
                        )
                    )
                    setImage(base64);
                });
        }

        getImagen(item.idItem);

    }, [item.nombre]);





    return (
        <div>
            <div className="card">
                <img src={`data:;base64,${image}`} className="card-img-top" alt="...No se encuentra imagen" />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">lorem ipsum dolor sit amet, consect el numero de producto es {item.idProducto}</p>
                    <a href="#" className="btn btn-primary">Ver mas..</a>
                </div>
            </div>
        </div>
    )
}

export default Producto
