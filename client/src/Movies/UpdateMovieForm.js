import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function UpdateMovieForm(props) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))

        console.log('FETCHING');
    }, [props.match.params.id])

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        Axios.put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
        .then(res => props.history.push('/'))
        .catch(err => console.log(err));
    }


    return (
        <div>
            <form>
            Title: <input type='text' value={movie.title} name='title' onChange={handleChange} placeholder='title' />
            Director: <input type='text' value={movie.director} name='director' onChange={handleChange} placeholder='director' />
            Metascore: <input type='text' value={movie.metascore} name='metascore' onChange={handleChange} placeholder='metascore' />
            Stars: <input type='text' value={movie.stars} name='stars' onChange={handleChange} placeholder='stars' />
            <div className='update' onClick={handleSubmit}>Update</div>
            </form>
        </div>
    )
}
