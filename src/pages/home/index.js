import React from 'react'
import Navbar from '../../components/navbar'

const Home = () => {
    return (
        <div id="page-home">
            <Navbar />
                <main>
                    <img class="materialboxed" width="650" src="./images/paisagem.jpg" />
                </main>
        </div>
    );
}

export default Home;