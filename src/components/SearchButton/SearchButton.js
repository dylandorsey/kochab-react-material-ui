import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Search } from '@material-ui/icons'; // destructuring

const SearchButton = props => (
            <div onClick={props.handleSubmitChild}>
                <Button
                    variant="raised"
                    color="primary"

                >
                    <Search />
                    Search
          </Button>
            </div>
);

export default SearchButton;