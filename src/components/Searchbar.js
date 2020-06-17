import React, {useState} from 'react';

const Searchbar= (props) => {

    const [term, setTerm]  = useState('Default text')

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(term)
    }

    return(
        <div className='search-bar ui segment'>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor="video-search">Video Search</label>
                    <input onChange={handleChange} name='video-search' type="text" value={term}/>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;