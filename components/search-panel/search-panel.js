import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    return (
        <input className='form-control serch-input'
        type='text'
        placeholder='поиск по записям'>
        </input>
    )
}
export default SearchPanel;