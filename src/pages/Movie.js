import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const refresh = () => {
    window.open("/add-movie");
        window.location.reload(true);
    }

    
class Movie extends Component
{
    state ={
        movies: [],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/movies');
        // console.log(res);
        if(res.data.status ===200)
        {
            this.setState({
                movies: res.data.movies,
                loading: false,
            });
        }

    }
    render(){

        var movie_HTMLTABLE="";
        if(this.state.loading)
        {
            movie_HTMLTABLE =<tr><td colSpan="4"> <h2>Loading...</h2></td></tr>;
        }
        else{
            movie_HTMLTABLE=
            this.state.movies.map((item)=>{
                return(
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.title}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.reviews}</td>
                        <td>
                            <Link to={`edit-movie/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn btn-sm">Delete</button>
                        </td>
                    </tr>
                )
            });

        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Movie List
                                    {/* <Link to={`add-movie} className="btn btn-primary btn-sm float-end">Add Movie</Link> */}
                                    <button type="button"  onClick={refresh} className="btn btn-primary btn-sm float-end">Add Movie</button>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table tavle-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>name</th>
                                            <th>Rating</th>
                                            <th>reviews</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movie_HTMLTABLE}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Movie;