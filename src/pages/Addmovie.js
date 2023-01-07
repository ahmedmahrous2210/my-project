import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const refresh = () => {
window.open("/");
    window.location.reload(true);
}
class Addmovie extends Component
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

    saveMovie = async (e)=>{
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/add-movie',this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                title:'',
                name:'',
                rating:'',
                reviews:''
            });
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Submit a Movie and a Review
                   
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveMovie}>
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
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="button"  onClick={refresh} className="btn btn-danger float-end">cancel</button>
                            
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

export default Addmovie;