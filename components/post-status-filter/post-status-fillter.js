import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Button } from 'reactstrap';
import { Badge, Button } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFillter = () => {
    let num = 6;
    return (
        <div className='btn-group'>
            <Button outline color='info'>ALL</Button>
            {/* <button 
                type='button'
                className='btn btn-info'>
                Все 
            </button> */}
                  {/* <row><Button color="info" outline>ALL<Badge color="secondary">{num}</Badge>
                </Button>
                </row> */}
            <button
                type='button'
                className='btn btn-outline-secondary'
                >Понравилось</button>
        </div>
    )
}

export default PostStatusFillter;