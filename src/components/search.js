import React, { Component } from 'react';
import styled, {css}  from 'styled-components';

const Search = props => {
   
        const Wrapper = styled.section`
            position: fixed;
            top: 65vh;
            left: 50%;
            height: 300vw;
            width: 300vw;
            transform: translateX(-50%);
            background-color: #608038;
            border: 2vh solid #85A84A;
            border-radius: 50%;
            display: flex;
            justify-content: center;
        `; 

        const Form = styled.form`
            margin-top: 10vh;
            width: 300px;
            height: 32px;
            max-width: 100%;
            display: grid;
            grid-template-columns: 1fr 20%;
            grid-gap: 16px;
            
            .search--input {
                border-radius: 10px;
                padding: 6px 10px;
            }
            .search--submit {
                border-radius: 10px;
            }

        `;
    
        return (
            <Wrapper>
                    <Form onSubmit={props.searchHandler} className="search search--searchbar">
                        <input 
                        type="text" 
                        id="searchbar-input" 
                        name="locationInput"
                        placeholder="Search a location..." 
                        className="search--input" />
                        <input className="search--submit" type="submit" value="Submit" />
                    </Form>
            </Wrapper>
        );
}

export default Search;


