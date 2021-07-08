import React, {useState, useEffect} from 'react';
import './Home.css';
// import Banner from './Banner'
import Card from './Card'

function Home() {

    const [publicaciones, setPublicaciones] = useState([])
    useEffect(() => {
        getPublicaciones()
    }, [])

    const getPublicaciones = async() => {
        const data = await fetch('http://localhost:8000/api/arriendos')
        const dataJson = await data.json()
        setPublicaciones(dataJson)
    }

    return (
        <div className='home'>
            {/* <Banner /> */}

            <div className='home__section'>
                {publicaciones.map(item => (
                    <Card
                        key = {item.id}
                        src = {item.img1}
                        title = {item.titulo}
                        description = {item.descripcion}
                        price = {item.valor}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
