import React, { Component } from 'react'

export default class search extends Component {
    render() {
        return (
            <div>
                <form className="search search--searchbar">
                    <input type="text" id="searchbar-input" className="search--input" />
                    <button className="searchbar--submit" onClick={this.locationSearchHandler}><i className="fa fa-chevron-right"></i></button>
                </form>
            </div>
        )
    }
}
