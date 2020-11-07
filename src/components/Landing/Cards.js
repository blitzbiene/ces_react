import { Link } from "react-router-dom";


const Cards = ()=>{


    return(
        <div className="container" >
        <div className="about" style={{marginTop:"40px",marginBottom:"40px"}}>
          <div className="card-deck">
            <div className="card">
              <img src="images/landing/vidhaan.jpg" className="card-img-top" alt="vidhaan_photo"/>
              <div className="card-body">
                <h5 className="card-title">VIDHAAN</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                  <Link to='/vidhaan'><div className="btn btn-primary">View More</div></Link>
              </div>
            </div>
            <div className="card">
              <img src="images/landing/cplcover.jpg" className="card-img-top" alt="cpl_photo"/>
              <div className="card-body">
                <h5 className="card-title">Civil Premier Leauge</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <Link to='/gallery/cpl'><div className="btn btn-primary">View More</div></Link>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    );
}
export default Cards;