import React, {FC, useState} from "react";
// @ts-ignore
import StarsRating from "react-star-ratings";
import {Badge} from "reactstrap";
import s from './moviesListCard.module.css';
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
}

interface MoviesListCardProps {
    movie: Movie;
}

const MoviesListCard: FC<MoviesListCardProps> = ({movie}) => {
    const [showGenres, setShowGenres] = useState(false);

    const genres = useSelector((state: RootState) => state.movies.genres)

    const toggleShowGenres = () => {
        setShowGenres(!showGenres);
    }

    const getGenreName = (genreId: number) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : '';
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <div className={s.card}>
            <img className={s.poster} src={posterUrl} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <StarsRating
                rating={movie.vote_average / 2}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
            />
            <p className={s.overview}>
                {movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview}
            </p>
            <div className={s.genres}>
                <Badge onClick={toggleShowGenres} color="primary" className={s.genreBadge}>
                    {movie.genre_ids.length}
                </Badge>

                {showGenres && (
                    <ul className={s.genreList}>
                        {movie.genre_ids.map((genreId) => (
                            <li key={genreId}>{getGenreName(genreId)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MoviesListCard;
