import Card from 'react-bootstrap/Card';  
import { Button, Form   } from "react-bootstrap"; 
import axios from 'axios';  
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
export const Search =() =>{ 
    const [usersU, setUsers] = useState([])
    const navigate = useNavigate();
    const favorite = (id) => {
            console.log(id) 
            var id= id
            document.getElementById(id).classList.toggle("bi-star"); 
    };
    const show = (event) => {
        navigate('/profile');
    }; 
    useEffect(() => {
        axios.get("http://localhost:3000/universities").then((resp) => {
            console.log(resp.data); 
            setUsers(resp.data)
        });  
    }, [])
    return (
        <div className="searchPage section"> 
            <div className="row">
                <div className="col-md-12"> 
                <Form className="d-flex searchForm">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 inputSearch"
                    aria-label="Search"
                    />
                    <Button className='btnSearch'>
                        <i className="bi bi-search"></i> 
                    </Button>
                </Form>
                        {usersU.map(uni => (
                            <Card className='shadow relative boxFavorite' key={uni.id}>
                              <Card.Body> 
                                  <Card.Title>{uni.name} <span className='country'> {uni.Country}</span> 
                                  <i onClick={()=>show(uni.id)} id={uni.Currency } className="bi bi-box-arrow-up-right iconRight icons"></i>  
                                  <i onClick={()=>favorite(uni.id)} id={uni.Currency} className="bi bi-star-fill iconRight icons star"></i> 
                                  </Card.Title> 
                                  <Card.Text>
                                    {uni.description}
                                  </Card.Text> 
                              </Card.Body>
                          </Card>  
                        ))}  
                </div> 
            </div> 
    </div>
    );
}