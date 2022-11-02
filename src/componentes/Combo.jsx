import React, { useState } from 'react'
import Select from 'react-select'



const Combo = () => {

    const [value, setValue] = useState('');
    const [valueMuni, setValueMuni] = useState('');
    const optionsDepartament = [
        { value: 'Yoro', label: 'Yoro' },
        { value: 'Atlantidad', label: 'Atlantidad' },
        { value: 'Colon', label: 'Colon' }
    ]



    const findMuni = (departament) => {
        const optionsMunicipios = {
            'Atlantidad': [{ value: 'masica', label: 'masica' },
            { value: 'La ceiba', label: 'La Ceiba' },
            { value: 'San juan', label: 'San juan' },
            { value: 'Tela', label: 'Tela' }]
        }
       // console.log(optionsMunicipios[departament]);
        return optionsMunicipios[departament];
    }
    console.log(value);
    console.log(valueMuni);
    return (
        <>

            <div className="card m-5 mb-5">
                <label htmlFor="Departamentos">Departamento</label>
                <div className="card-body border border-dark">
                    <Select options={optionsDepartament} onChange={(e) => {
                        setValue(e.value);
                    }} />
                </div>
            </div>

            <div className="card m-5 mb-5">
                <label className="" htmlFor="Municipio">Municipios</label>
                <div className="card-body border border-dark">
                    <Select options={findMuni(value)} onChange={(e) => {
                        setValueMuni(e.value);
                    }} />
                </div>
            </div>
        </>
    )
}

export default Combo