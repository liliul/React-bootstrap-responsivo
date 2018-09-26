import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => response.json())
    .then(json => this.setState({photos: json}))
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
           
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

           <a className="navbar-brand"><i className="fas fa-stroopwafel"></i>Liliu</a>

          
          <section className="collapse navbar-collapse" id="navbarMainToggler">
             <div className="navbar-nav ml-auto">
               <a className="nav-item nav-link" hef="#">Home</a>
               <a className="nav-item nav-link" hef="#">Channel</a>
               <a className="nav-item nav-link" hef="#">Roma</a>
             </div>
             <form className="form-inline">
               <div className="input-group">
                 <div className="input-group-preperd">
                   <span className="input-group-text">@</span>
                 </div>
                 <input type="text" className="form-control mr-1" placeholder="Username"/>
                 
               </div>
               <button className="btn btn-outline-success">Login</button>
             </form>
          </section>
        </nav>


      <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
        <ol className="carousel-indicators">
          <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
          <li data-target="#carouselSection" data-slide-to="1"></li>
          <li data-target="#carouselSection" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inrer">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/600/92c952" alt="Imagen 1" className="d-block w-100 image-fluid" />
          </div>
          <div className="carousel-item ">
            <img src="https://via.placeholder.com/600/771796" alt="Imagen 2" className="d-block w-100 image-fluid" />
          </div>
          <div className="carousel-item ">
            <img src="https://via.placeholder.com/600/24f355" alt="Imagen 3" className="d-block w-100 image-fluid" />
          </div>
          <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </div>
          <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </div>
        </div>
      </section>  

      <section className="container p-2">
        <ul className="list-unstyled">
        {
          this.state.photos.map(photo => {
            return (  
              <li className="media pt-2" key={photo.id}>
                <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                <div className="media-body">
                  <h5 className="nt-0 nd-1">{photo.title}</h5>
                  Dev , ativa as notificação.
                </div>
              </li>
            )
          })
        }    
        </ul>
      </section>


        <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
          <div className="container col-8 col-md-4 d-flex justify-content-around">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-google-plus-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter-square"></i>

          </div>
        </footer>
      </div>
    );
  }
}

export default App;

