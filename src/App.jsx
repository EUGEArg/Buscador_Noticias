import { Container, Grid, Typography, Box} from '@mui/material';
import { height } from '@mui/system';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { NoticiasProvider } from './context/NoticiasProvider';

function App() {


	return (
		<NoticiasProvider>
		<Container>			
			<header>
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				sx={{
					borderBottom: '.6rem solid #402ecc',
					marginBottom: '2rem',
				}}>		
				<Grid item xs={12} md={6} lg={4}> 
					<Typography align='center' marginY={5} component='h1' variant='h3' sx={{textTransform:'uppercase'}}>
						Info24
					</Typography>
				</Grid>	
				<Grid item xs={12} md={6} lg={4} marginY={5}> 
					<Formulario />
				</Grid>	
			</Grid>
						
			</header>
		
			<ListadoNoticias />

			
		</Container>
		</NoticiasProvider>
	)
}

export default App
