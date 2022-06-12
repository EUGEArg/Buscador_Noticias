import Grid from '@mui/material/Grid';
import Typografy from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20) //ceil redondea hacia arriba.

    return (
        <>
            {/* <Typografy
                textAlign='center'
                marginY={5}
                variant='h3'
                component={'h2'}>
                Últimas Noticias
            </Typografy> */}

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url} //porque no hay id
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack 
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination 
                    count={totalPaginas} 
                    color="primary" 
                    onChange={handleChangePagina} 
                    page={pagina}/>
            </Stack>
        </>
    )
}

export default ListadoNoticias
