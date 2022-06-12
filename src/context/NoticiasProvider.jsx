import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general') //para que comience mostrando noticias en general
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1) //para que comience mostrando la pagina 1
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            
            const { data } = await axios(url)

            setNoticias(data.articles) //las noticias están en articles
            setTotalNoticias(data.totalResults) //total de noticias encontradas
            setPagina(1) //si hay un cambio de categoría que regrese a la página 1
        }
        consultarAPI()
    }, [categoria]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            
            const { data } = await axios(url)

            setNoticias(data.articles) //las noticias están en articles
            setTotalNoticias(data.totalResults) //total de noticias encontradas   
        }
        consultarAPI()
    }, [pagina]);

    const handleChangeCategoria = e => { //para no pasar el setCategoria creo esta función
        setCategoria(e.target.value);
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    return(
        <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider,
}

export default NoticiasContext;