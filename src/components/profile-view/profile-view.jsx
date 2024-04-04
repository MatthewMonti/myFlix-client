import React, { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"



export const UserProfile = ({users}) => {
    const { userId } = useParams();
  
    const user = users.find((u) => u._id === userId);

    if (!user) {
      return <div>Movie not found</div>;
  }
  


  return (
    <Row className="mx-5">
      <Link to={`/api/users/:userId`}>
        <img varient="link" className="movie-poster2"src={movie.Image} />
      </Link> 
      <br></br>
      <div>
        <ReactPlayer className="Video" url={movie.url} /> 
      </div>  
      <div>
        <br></br>
        <h2>{movie.Title}</h2>
      </div>
      <div>
        <h3 className="Label">Description: </h3>
        <p>{movie.Description}</p>
      </div>
      <div>
        <h3 className="Label">Release: </h3>
        <p>{movie.Release}</p>
      </div>
      <div>
        <h3 className="Label">Genre: </h3>
          <div>
          <h5 className="Label">Name:</h5>
          <p className="NO">{movie.Genre.Name}</p>
          </div>
          <div>
          <h5 className="Label">Description: </h5>
          <p className="NO">{movie.Genre.Description}</p>
          </div>
     </div>
      <div>
        <h3 className="Label">Rated: </h3>
        <span>{movie.Rated}</span>
      </div>
      <div>
        <h3 className="Label">Rating: </h3>
        <p>{movie.Rating}</p>
      </div>
      <div>
       <h3 className="Label">Actors: </h3>
      <p>{[movie.Actors.join(', ')]}</p>
      </div>
      <div>
        <h3 className="Label">Director: </h3>
          <div>
          <h5 className="Label">Name:</h5>
          <p className="NO">{movie.Director.Name}</p>
          </div>
          <div>
            <h5 className="Label">Bio: </h5>
            <p className="NO">{movie.Director.Bio}</p>
          </div>
          <div>
            <h5 className="Label">Birth: </h5>
            <p className="NO">{movie.Director.Birth}</p>
          </div>
          <div>
            <h5 className="Label">Death: </h5>
            <p className="NO">{movie.Director.Death}</p>
          </div>
      </div>    
      <div>
        <h5 className="Label">Featured: </h5>
        <p>{movie.Featured}</p>
      </div>
    </Row>
  );
};