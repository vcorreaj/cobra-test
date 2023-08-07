import { render } from 'react-dom'
import { App } from './app'
import {BrowserRouter} from 'react-router-dom'
const app = document.getElementById('app')
 
render(<BrowserRouter><App /></BrowserRouter>, app)
