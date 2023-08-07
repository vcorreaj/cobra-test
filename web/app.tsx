import './styles.css';
 import {NavBar} from "./component/NavBar";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  
 import 'react-bootstrap-typeahead/css/Typeahead.css';
 import {Routes, Route} from 'react-router-dom'
import  Login  from './pages/login';
import { Search } from './pages/search';
import { Perfil } from './pages/perfil';
export function App() {
	return (
		<div className='test'>
			<NavBar/> 
			<Routes>
				<Route path='/' element={<Login/>}></Route>
				<Route path='/search' element={<Search/>}></Route>
				<Route path='/profile' element={<Perfil/>}></Route>
			</Routes>
		</div>  
	); 
}
export default App;