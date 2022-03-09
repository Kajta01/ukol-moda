import React from 'react';
import './style.css';

import Product from '../Product/Product';

const Dresses = () => {
    return(
        <section className="dresses">
        <h2>Šaty</h2>
        <div class="products">
            <Product image="red-dress.jpg" name="Červené šaty" description="V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií." price={2290}/>
            <Product image="flower-dress.jpg" name="Květované šaty" description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat." price={3100}/>
            <Product image="yellow-dress.jpg" name="Žluté šaty" description="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě." price={4250}/>
        </div>
        </section>
    );
}


export default Dresses