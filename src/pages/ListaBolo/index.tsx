//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";


//api
import api from "../../ultils/api";


//hooks
import {useState, useEffect}from "react";


function ListaBolo() {

const [bolos, setBolos] = useState<any[]>([]);

function listarBolo(){
    api.get("bolos")
    //then é para retorno de susseco
    .then((response)=> {
        console.log(response);
        setBolos(response.data);
        
    })
    //cathen é para retorno de erro
    .catch((error)=>{
        console.log(error);
    })
}
    useEffect(()=>{
    listarBolo();
},[]);
    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}
                {
                    bolos.map((bolo:any,index: number) =>{
                        return <CardBolo
                        
                        key={index}
                        nome={bolo.nome}
                        foto={bolo.user_img}
                        ingredientes={bolo.ingredientes}
                        cobertura={bolo.cobertura}
                        valor={bolo.valor}
                        />
                    })
                }

            </section>
        </main>
    );
};

export default ListaBolo;