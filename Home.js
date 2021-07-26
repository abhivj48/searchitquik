import React, { useState,useEffect} from 'react';
import { Button,Spinner,Card } from 'react-bootstrap';

export default function Home() {
    const [mySearch, setMySearch] = useState()
    const [data, setData] = useState([{}])

    useEffect(()=>{
        // getResult()
    },[])

    // WAITING FOR A GOOD API


    function getResult(){
        fetch(`https://real-time-google-search.p.rapidapi.com/search?q=${mySearch}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "MY_API_KEY",
		"x-rapidapi-host": "real-time-google-search.p.rapidapi.com"
	}
})
.then((response) => {
    response.json().then((res)=>{
        // console.log(response);
        // console.log(res);
        setData([res.data])
        console.log(data);
    
	
})
})
    }

    function click(){
        getResult()
    }

    

    return (
        <>
            <div className="seacrhDiv">
                <input className="searchBar" type="text" placeholder="Milky Way Galaxy" placeholder="Milky Way" value={mySearch} onChange={((e) => setMySearch(e.target.value))} />
                <Button onClick={click}>Search</Button>
                
            </div>
            <div className="forMap">
           
                    <h1 style={{marginTop:"50vh", marginLeft:"40vw"}} >Under Construction....</h1>
                {
                    data.map((item, i) =>
                        <div key={i}>
                           { console.log(item.knowledge_graph)}
                            <p className="resultTime">{item.result_stat}</p>
                            <Card className="cardForceleb" style={{ width: '30rem' }}>
                               
                                <Card.Body> 
                                    {/* <Card.Title>{item.knowledge_graph.title}</Card.Title> */}
                                    {/* <p>{item.knowledge_graph.subtitle}</p> */}
                                    {/* <hr/> */}
                                    <Card.Text>
                                        {/* {item.knowledge_graph.description} */}
                                        {/* <strong>{item.knowledge_graph.informations.value.title}</strong><span>{item.knowledge_graph.informations.value.decs}</span> */}
                                     </Card.Text>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </div>
                    )
                }



            </div>

        </>
    )
}
