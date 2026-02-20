import styles from './Topo.module.css'

import img from '../../img/jv.png'

function Topo(){
    return(
        <div className={styles.container_name}>
            <div className={styles.children_left}>
                <h2>Hello, it's me </h2>
                <h1>João Ifran</h1>
                <p>
                    Transformar problemas complexos em código limpo é o que me move. Como futuro Engenheiro de Computação,  combino a análise técnica profunda com a agilidade  do desenvolvimento web moderno. 
                    Minha especialidade é orquestrar dados e regras de  negócio no Back-End utilizando Python (Django) e  PHP, mas não paro por aí. Atuo também no Front-End  com React e JavaScript, fechando o ciclo do  desenvolvimento Full Stack. Meu objetivo é entregar  aplicações completas: seguras no back-end e intuitivas no front-end.
                </p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Topo;