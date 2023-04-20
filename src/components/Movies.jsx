import {Movie} from './Movie';
import './Movies.css';
import error from '../images/problem-solving.png';

function Movies(props){
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => 
                    <Movie key={movie.imdbID} {...movie}/>)
                ) : (
                    <div className='error'>
                    <h4 className='white-text'> Not found</h4>
                    <img src={error}/>
                    </div>
                )}
        </div>
    );
}

export {Movies};