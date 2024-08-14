'use client'


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchGenres, fetchMovies} from '@/store/actions/moviesActions';
import { RootState, AppDispatch } from '@/store';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";


const MoviesList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: RootState) => state.movies.movies);

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <div>
            {movies.map((movie) => (
               <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MoviesList;

