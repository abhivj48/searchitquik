import {Link} from 'react-router-dom'
import './Links.css'
// import {Button} from 'react-bootstrap'

export default function Links(){
    return(
        < >
        <Link className="links" to='/'>Home</Link>    
        <Link className="links" to='/news'>Latest News</Link>  
        {/* <Link className="links" to='/news'>News Search</Link>   */}
        <Link className="links" to='/image'>Image Search</Link>
        <Link className="links" to='/recipe'>Get Recipe</Link>
        
        </>
        )
}