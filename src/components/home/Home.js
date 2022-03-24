import React from './home.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Chart from '../chart/Chart';
import Turno from '../turno/Turno';


const Home = () => {
  return (
    <div className='home'>
         <Sidebar />
         <div className="homeContainer">
            <Navbar/>
            <div className="turnos">
              <Turno/>
              <Turno/>
              <Turno/>
            </div>
            <div className="charts">
              <div className="left">
                <Chart/>
              </div>
              <div className="right">
                <p className="title">Proximos horários</p>
                <div className="card">
                  <span>Nombre</span>
                  <span></span>
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Home