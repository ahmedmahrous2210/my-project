import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// const refresh = () => {
// window.open("/");
//     window.location.reload(true);
// }
class Editmovie extends Component
{

    state = {
        title:'',
        name:'',
        rating:'',
        reviews:'',
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async componentDidMount(){
        const mov_id = this.props.match.params.id;
        // console.log(mov_id);
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-movie/${mov_id}`);
        if(res.data.status ===200)
        {
            this.setState({
                title:res.data.movie.title,
                name:res.data.movie.name,
                rating:res.data.movie.rating,
                reviews:res.data.movie.reviews,
            });
        }

    }

    updateMovie = async (e)=>{
        e.preventDefault();
          const mov_id = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/update-movie/${mov_id}`,this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
      
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Editmovie
                   
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateMovie}>
                                    <div className="form-group mb-3">
                                        <label>Movie title</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Your Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                    <label>Rating</label>
                              

                                        <input type="text" name="rating" onChange={this.handleInput} value={this.state.rating} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Your Review</label>
                                        <input type="text" name="reviews" onChange={this.handleInput} value={this.state.reviews} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Update Movie</button>
                                        
                                        {/* <button type="button"  onClick={refresh} className="btn btn-danger float-end">Update Movie</button> */}
                            
                                    </div>

                                  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Editmovie;