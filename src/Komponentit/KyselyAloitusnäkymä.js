import { useState } from "react";
import AloitaKysely from "./Kysely";


//landing page, nappia painaessa wrapperin sisältö muuttuu itse kyselyksi
function KyselyAloitusnäkymä() {

    const tila = useState()

    if (tila) {
        return (
        <div className='wrapper'>
        <h2>Uudet Kymmenen Kysymystä</h2>
        <p>Oletko Heureka-Hyrde vai Tampio-Teppo? Testaa Stam1na-tietosi!</p>
        <button onClick={AloitaKysely}>Aloita!</button>
        </div>
    )
}
}

export default KyselyAloitusnäkymä;