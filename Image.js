import React, { useState, useEffect } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import './Image.css';
export default function Images() {
    const [search, setSearch] = useState("Saturn Rings")
    const [data, setData] = useState([])
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        getImage()
    }, [])

    function getImage() {
        fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "MY_API_KEY",
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
            }
        })
            .then(response => {
                response.json().then(res => {
                    // console.log();
                    setData(res.value);
                    console.log(data);
                    setLoading(true)
                }
                )

            })

    }
    function clickMe() {
        
        getImage()
    }

    return (
        <>
            <div className="seacrhDiv">
                <input className="searchBar" type="text" placeholder="Search Images" value={search} onChange={((e) => setSearch(e.target.value))} />
                <Button className="btn" onClick={clickMe}>Search</Button></div>
            <div className="imgResult" >
                {
                    loading?
                    
                        data.map((item, i) =>
                        //     <div>{console.log(item.image.link)}</div>
                        <div key={i}>


                            <Card style={{ width: '18rem', border:"none" }}>
                                <a className="imgS" href={item.hostPageUrl} target="_blank" rel="noreferrer"><Card.Img variant="top" src={item.contentUrl} /></a>
                                <Card.Body>
                                  
                                    <Card.Text>
                                       
                                        
                                    <a className="title" href={item.hostPageUrl}target="_blank" rel="noreferrer">{item.name}</a>
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </div>

                    )
                    :<>
                    <Spinner animation="border" style={{marginTop:"25vh", marginLeft:"45vw"}}/>
                    <p style={{marginTop:"30.5vh",marginRight:"115vh",position:"relative",right:"45px",fontWeight:"bolder"}}>Loading....</p>
                    </>
                    }
                
                
                   
                
            </div>
        </>

    )
}