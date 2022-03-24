
import  './turno.scss'
import data from '../../data/data'

const Turno = (turno) => {

  return (
    <div className='turno' >
        <p className="title">Turno: <span>Mañana</span></p>
        <div className='disponibilidad'>
            <div className="left">
                <span>Pendientes</span>
                <span>45</span>
                </div> 
            <div className="right">
                <span>Asignados</span>
                <span>34</span>
                </div>   
               
               
        </div>
    </div>
  )
}

export default Turno