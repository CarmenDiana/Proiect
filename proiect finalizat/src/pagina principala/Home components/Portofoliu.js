import React from 'react';
import "../CSS components/Portofoliu.scss"


export function Portofoliu(){
    return(
        <div className={"portofoliu"}>
            <h2>Portofoliu</h2>

            <div className={"portofoliuPoze"}>
                <div className={"fotografiePodus"}>
                    <h3>Fotografie de produs</h3>
                </div>
                <div className={"fotografieEveniment"}>
                    <h3>Fotografie de eveniment</h3>
                </div>
                <div className={"fotografieAeriana"}>
                    <h3>Fotografie aeriana</h3>
                </div>
            </div>
        </div>
    )
}