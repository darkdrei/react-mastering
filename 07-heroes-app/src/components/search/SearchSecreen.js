import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroSearch } from '../../selectors/getHeroSearch';

//Location e historia por props 
export const SearchSecreen = ({ history }) => {

    
    
    //Obtener el location cn un hook
    const location = useLocation();
    console.log(location.search);
    const { q = '' } = queryString.parse( location.search );
    const [ formValues, handleInputChange ] = useForm({search: q});
    const {search } = formValues;

    //Data 
    const heroesFiltered = useMemo(() => getHeroSearch( q ), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(search);
        history.push(`?q=${ search }`);
    }

    return (
        <div>
            <h1>SearchSecreen</h1>
            <hr></hr>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="search"
                            value={ search }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit" 
                            className="btn m-1 btn-block btn-outline-primary" >
                                Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Result </h4>

                    {
                        (q ==='')
                            && (
                                <div className="alert alert-info">
                                    Search a hero
                                </div>
                            )
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        && (
                            <div className="alert alert-danger">
                                There is no a hero with { search }
                            </div>
                        )
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero }
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
