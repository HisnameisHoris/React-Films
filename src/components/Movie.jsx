import './Movie.css';
import {useState} from 'react'

function Movie(props){
    const{
        Title:title,
        Year:year,
        imdbID:id,
        Type:type,
        Poster:poster
    } = props;

    const[buttonState, setButtonState] = useState({
        className:'waves-effect waves-light btn',
    });

    const handleButtonActive = (setButtonState) => {
        setButtonState({
            className:'waves-effect black active-btn btn',
        })
    }

    return <div id={id} className="movie card">
        <div className="card-image waves-effect waves-blok waves-light">
            {
                poster === 'N/A' ? (
                    <img className="activator"
                    src={`https://via.placeholder.com/300x400?text=${title}`}/>
                ):
                <img className="activator" src={poster} />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator"><b>{title}</b></span>
            <p>{year} <span className="right">{type}</span></p>
            <div className="like center">
                <button onClick={() => {handleButtonActive(setButtonState)}}
                className={buttonState.className}>В избранном</button>
            </div>
        </div>
    </div>;
}
export {Movie};