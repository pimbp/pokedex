import React from 'react'
import { Button } from 'react-bootstrap'

class SortByNameAsc extends React.Component
{
    render=()=>
    {
        return(
            <Button variant="outline-primary" onClick={()=>this.props.setSortBy('nameAsc')}>Sort by name asc</Button>
        );
    }
}
export default SortByNameAsc;