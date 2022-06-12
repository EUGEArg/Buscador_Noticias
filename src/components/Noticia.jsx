import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import  Link  from '@mui/material/Link'
import Typografy from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

const Noticia = ({noticia}) => {
    
const { urlToImage, url, title, description, source } = noticia //destructuring de lo que extraigo de la noticia

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && ( //para que solo muestre noticias que tienen imagen
                    <CardMedia 
                        component='img'
                        alt={`Imagen de la noticia: ${title}`}
                        image={urlToImage}
                        height='250'
                    />
                )}

                <CardContent>
                    <Typografy variant='body1' color='error'>
                        {source.name}
                    </Typografy>
                    <Typografy variant='h5' component='div'>
                        {title}
                    </Typografy>
                    <Typografy variant='body2'>
                        {description}
                    </Typografy>
                </CardContent>
                
                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'100%'}
                        textAlign='center'
                        sx={{
                            textDecoration: 'none',
                        }}
                    >Leer Noticia
                    </Link>
                </CardActions>
        </Card>
        </Grid>
       
    )
}

export default Noticia