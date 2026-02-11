//layouts
import Footer from '../layout/Footer';
import Projetos from '../layout/Projetos';

import styles from './Home.module.css'

function Home(){
    return(
        <main>
            <h1>Home</h1>
            <Projetos/>
            <Projetos/>
            <Projetos/>
            <Footer/>   
        </main>
    )
    
}

export default Home;