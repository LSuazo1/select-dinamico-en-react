import { useState } from 'react';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import cara from "../assets/cara-feliz.png";
import caraTriste from "../assets/cara-triste.png";
import cancelar from "../assets/iconoX.png";
// with npm npm install primereact primeicons
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
const Estrellas = () => {
  const [value, setValue] = useState(0);
  const [state, setState] = useState(false);
  const [val3,setVal3]=useState(0);
  console.log("Numero de Estrellas en consola:", value);
  console.log("Numero de Estrellas en consola:", val3);
  return (
    <>
      {/* <Rating /> */}
      <Button label="Save" />
      <h1 className="text-bold">El numero de estrellas es:{value}</h1>
      <Rating value={value} onChange={(e) => setValue(e.value)} stars={5} />

      <h2>Prueba de cara icono:</h2>
      <h5>Template</h5>
      <Rating
        value={val3}
        onChange={(e) => setVal3(e.value)}
        cancelIcon={
          <img src={cancelar } onError={(e) => (e.target.src = cancelar )} alt="no encontrada" width="30px" height="30px" />
        }
        onIcon={
          <img
            src={cara }
            onError={(e) => (e.target.src = cara )}
            alt="custom-image-active"
            width="25px"
            height="25px"
          />
        }
        offIcon={<img src={ caraTriste } onError={(e) => (e.target.src =  caraTriste)} alt="no encontrada" width="25px" height="25px" />}
      />
    </>
  )
}

export default Estrellas
