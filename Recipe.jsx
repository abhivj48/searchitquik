import { Card, Spinner, Button, } from "react-bootstrap";
import { useState, useEffect,  } from "react";
import './Recipe.css'

function Recipe() {
    const [food, setFood] = useState("Veg Biryani")
    const [foodData, setFoodData] = useState([{}])
    const [loading, setLoading] = useState(false)
    // const [error,setError]= useState()

    

    useEffect(() => {
        foodApi()
    }, [])


    function foodApi() {
        fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${food}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "MY_API_KEY",
                "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
            }
        })
            .then((response) => {
                response.json().then((res) => {
                    setFoodData(res.hits);
                    console.log(foodData)
                    setLoading(true)

                })
            })

            .catch(err => {
                console.error(err);
                // setError(err)
            });
    }

    function primaryOP() {

        foodApi()

    }



    return (
        <div>


            <div className="seacrhDiv">
                <input className="searchBar"  type="text" value={food} onChange={((e) => setFood(e.target.value))} />
                <Button onClick={primaryOP} >Search</Button>
            </div>

            <div className="foodCard">
                {
                    loading ?
                        foodData.map((item, i) =>
                            <Card key={i} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.recipe.image}  />
                                <Card.Body>
                                    <Card.Title>{item.recipe.label}</Card.Title>
                                    <p>{item.recipe.source}</p>
                                    <Card.Text>
                                        <h4>Ingredients: </h4>
                                        <hr />
                                        <p>{item.recipe.ingredientLines}</p>
                                    </Card.Text>
                                    <h5>Ingredients Ready? </h5><br />
                                    <a href={item.recipe.url} target="_blank" rel="noreferrer"> <Button variant="primary">Make It!</Button></a>
                                </Card.Body>
                            </Card>
                        )
                        :
                        <div>
                            <Spinner animation="border" style={{ marginTop: "30vh", marginLeft: "46vw" }} />
                            <p style={{ marginLeft: "45vw", fontWeight: "bolder" }}>Loading....</p>
                        </div>
                }
            </div>

        </div >
    )
}

export default Recipe;