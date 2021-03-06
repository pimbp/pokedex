import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
class Searchbox extends React.Component
{

    render=()=>
    {
        return(
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Search by name</InputGroup.Text>
                <FormControl
                    onChange={()=>this.props.setName(document.getElementById('name').value)}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    id="name"
                />
            </InputGroup>)
    }
}
export default Searchbox;