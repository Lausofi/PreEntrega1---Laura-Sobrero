import ItemListContainer from "../ItemListContainer/ItemListContainer"
import NavBar from "../NavBar/NavBar"
import { Titulo } from "../Titulo/Titulo"

function ComponenteContainer () {
    let tituloApp = 'Seiyas Bakery'
    
        return (

        <>
        <Titulo titulo={tituloApp} subTitulo={'Utensillos'} />
        <NavBar />
        <ItemListConteiner saludo={'Saludos'} />
        </>
        )
    }
    

export default ComponenteContainer