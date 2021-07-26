import React, { useState, useEffect } from "react";
import { Button, Spinner } from 'react-bootstrap'
// import axios from 'axios'
// import './Images.css'
import './Trending.css'




export default function Trending() {
    const [news, setNews] = useState([{}])
    // const [error, setError] = useState()
    const [q, setq] = useState("India's Top Headline")
    const [loading, setLoading] = useState(false)
    // const history=useHistory();
    useEffect(() => {
        apicall()
    }, [])
    function apicall() {
        fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=MY_API_KEY`)
            .then(response => {
                response.json().then((res) => {
                    setNews(res.articles)
                    console.log(news);
                    setLoading(true)

                })

            })
            .catch(err => {
                console.error(err);
            });

    }
    function clicked() {
        apicall()
    }

    return (
        <>

            <div className="seacrhDiv">
                <input type="text" className="searchBar" value={q} onChange={((e) => setq(e.target.value))} />

                <Button type="button" onClick={clicked}>
                    Search
                </Button></div>
                <div className="margin"></div>
            <div className="newsSearch">
                {
                    loading ?


                        news.map((item, i) =>
                            <>
                                 

                                     <div className="newsFileds"  key={i}>
                                     <a className="link" href={item.url} target='_blank' rel="noreferrer">
                                         <div className="styleElement">

                                    <span className="divImg1">
                                       <img className="divImg"  src={item.urlToImage}  />
                                    </span>
                                    <span className="source"><b> Source: </b>{item.source.name}</span>
                                    <div className="content">{item.description}</div>
                                    </div>
                                   
                                    
                                    </a>
                                    
 
                                </div>

                            </>
                        )
                        :
                        <>
                            <Spinner animation="border" style={{ marginTop: "30vh", marginLeft: "50vw" }} />
                            <p style={{ marginLeft: "49vw", fontWeight: "bolder" }}>Loading....</p>
                        </>



                }


            </div>


        </>
    )
}