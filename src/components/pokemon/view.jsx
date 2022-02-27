import React from 'react'
import Tile from './tile'
import Searchbox from '../utils/searchbox'
import SortByIdAsc from "../utils/sortByIdAsc";
import SortByIdDesc from "../utils/sortByIdDesc";
import SortByNameAsc from "../utils/sortByNameAsc";
import SortByNameDesc from "../utils/sortByNameDesc";
import Toggle from "../utils/toggle_button";

class View extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
            {
                name: '',
                sortBy: 'idAsc',
                types: [],
                reload: true
            }
    }
    setName=(value)=>
    {
        this.setState({name: value});
    }
    setSortBy=(value)=>
    {
        this.setState({sortBy: value});
    }
    addType=(value)=>
    {
        this.state.types.push(value);
    }
    remType=(value)=>
    {
        this.state.types.splice(value, 1);
    }
    setReload=()=>
    {
        this.setState({reload: !this.state.reload})
    }
    render=()=> {
        return (
            <div style={{border: '2px solid black', width: '700px', height: '700px', float: 'left' }}>
                <div style={{border: '2px solid black', width: '80%', marginLeft: '10%', height: '6%', marginTop: '10px'}}>
                    <Searchbox name={this.state.name} setName={this.setName}></Searchbox>
                </div>
                <div style={{border: '2px solid black', width: '80.5%', marginLeft: '8.5%', height: '6%', marginTop: '10px'}}>
                    <SortByIdAsc setSortBy={this.setSortBy}></SortByIdAsc>
                    <SortByIdDesc setSortBy={this.setSortBy}></SortByIdDesc>
                    <SortByNameAsc setSortBy={this.setSortBy}></SortByNameAsc>
                    <SortByNameDesc setSortBy={this.setSortBy}></SortByNameDesc>
                </div>
                <div style={{border: '2px solid black', width: '80%', marginLeft: '10%', height: '20%', marginTop: '10px'}}>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Normal</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Fighting</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Flying</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Poison</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Ground</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Rock</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Bug</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Ghost</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Steel</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Fire</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Water</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Grass</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Electric</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Psychic</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Ice</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Dragon</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Dark</Toggle>
                    <Toggle addType={this.addType} types={this.state.types} remType={this.remType} setReload={this.setReload}>Fairy</Toggle>


                </div>
                <div style={{border: '2px solid black', width: '80%', marginLeft: '10%', height: '60%', marginTop: '10px', overflow: 'auto'}}>
                    <Tile name={this.state.name} sortBy={this.state.sortBy} types={this.state.types} reload={this.state.reload}></Tile>
                </div>
            </div>
        );
    }
}
export default View;