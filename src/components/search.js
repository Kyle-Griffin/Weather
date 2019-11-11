import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.props.searchHandler} className="search search--searchbar">
                    <input 
                    type="text" 
                    id="searchbar-input" 
                    name="locationInput"
                    placeholder="Search a location..." 
                    className="search--input" />
                    <input className="searchbar--submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
