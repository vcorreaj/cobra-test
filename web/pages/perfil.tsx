import Card from 'react-bootstrap/Card'; 
import axios from 'axios';  
import { useState, useEffect } from 'react'
export const Perfil =() =>{ 
    const [usersU, setUsers] = useState([])
    const [descrip, setdescrip] = useState('')
    const [nameU, setnameU] = useState('')
    const [web, setweb] = useState('')
    const [loc, setloc] = useState('')
    const [cap, setcap] = useState('')
    const [sym, setsym] = useState('')
    const [lang, setlang] = useState('')
    const [popul, setpopul] = useState('') 
    const favorite = (n,id) => { 
         var id= id
          document.getElementById(id).classList.toggle("bi-star"); 
          
    };
    const show = (n) => {
        for (let i = 0; i < usersU.length; i++) {
            if(usersU[i].id==n){
                document.getElementById('boxUni').style.display="block"
                setdescrip(usersU[i].description)
                setnameU(usersU[i].name)
                setweb(usersU[i].web)
                setloc(usersU[i].Country+' - '+usersU[i].City)
                setcap(usersU[i].Country+' - '+usersU[i].City)
                setsym(usersU[i].Currency)
                setlang(usersU[i].Language)
                setpopul(usersU[i].Population)  
            }
            
          }
    }; 
    useEffect(() => {
        axios.get("http://localhost:3000/universities").then((resp) => {
            console.log(resp.data); 
            setUsers(resp.data)
        });  
    }, [])
    return (
        <div className="profilePage"  >
            <div className="container section">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title">My favorites</h2>  
                        {usersU.map(uni => (
                            <Card className='shadow relative boxFavorite' key={uni.id}>
                              <Card.Body> 
                                  <Card.Title>{uni.name} <span className='country'> {uni.Country}</span> 
                                  <i onClick={()=>show(uni.id )}   className="bi bi-box-arrow-up-right iconRight icons"></i>  
                                  <i onClick={()=>favorite(uni.id, uni.Currency )} id={uni.Currency} className="bi bi-star-fill iconRight icons star"></i> 
                                  </Card.Title> 
                                  <Card.Text>
                                    {uni.description}
                                  </Card.Text> 
                              </Card.Body>
                          </Card>  
                        ))} 
                    </div>
                    <div className="col-md-6" id="boxUni" style={{display: "none"}}> 
                        <h2 className="title">Selected university</h2>
                        <Card className='shadow relative boxFavorite'>
                            <Card.Body> 
                                <Card.Title>{nameU} 
                                </Card.Title> 
                                <Card.Text id='descrip'>
                                    {descrip} 
                                </Card.Text>  
                                <Card.Text>
                                    Website: <a href='#' id='web'>{web} </a>
                                </Card.Text> 
                                <Card.Text>
                                    Location: <a href='#' id='coutry'>{loc} </a>
                                </Card.Text> 
                                <Card.Text>
                                    Country's capital: <a href='#' id='capital'>{cap} </a>
                                </Card.Text> 
                                <Card.Text>
                                    Currency: <a href='#' id='symbol'>{sym} </a>
                                </Card.Text> 
                                <Card.Text>
                                    Language: <a href='#' id='lang'>{lang} </a>
                                </Card.Text> 
                                <Card.Text>
                                    Population: <a href='#' id='popul'>{popul} </a>
                                </Card.Text> 
                            </Card.Body>
                        </Card> 
                    </div>
                </div>
            </div>
        </div>
    );
}
