import React from 'react';
import { Card } from 'react-bootstrap';
import pokedex from './assets/pokedex.json';

class Tile extends React.Component
{
    render=()=>{
        let temp = [];
            if(this.props.types.length !=0) {
                pokedex.forEach((pokemon) => {
                    let x = 0;
                    pokemon.type.forEach(type => {
                        this.props.types.forEach(type1 => {
                            if (type == type1) {
                                x++;
                            }
                        });
                    });
                    if (x != 0) {
                        temp.push(pokemon);
                    }
                });
            }
            else
            {
                temp=pokedex;
            }
            switch(this.props.sortBy)
            {
                case 'idAsc':
                    temp.sort((a,b)=>a.id > b.id);
                    break;
                case 'idDesc':
                    temp.sort((a,b)=>b.id>a.id);
                    break;
                case 'nameAsc':
                    temp.sort((a,b)=>a.name.english>b.name.english);
                    break;
                case 'nameDesc':
                    temp.sort((a,b)=>a.name.english<b.name.english);
                    break;
            }
            return(
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {temp.filter(pokemon=>pokemon.name.english.toLowerCase().includes(this.props.name.toLowerCase())).map(pokemon=>
                        <Card style={{ width: '20%', height: '50%' }}>
                                <Card.Img variant='top' src={require('./assets/images/' + pokemon.id.toString().padStart(3, '0') + '.png')} />
                                <Card.Body>
                                     <Card.Title style={{fontSize: '12px'}}>{pokemon.name.english}</Card.Title>
                                 </Card.Body>
                             </Card>
                    )}
                </div>
            )
    };
}
export default Tile;