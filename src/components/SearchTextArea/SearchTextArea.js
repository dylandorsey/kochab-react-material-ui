import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchTextArea = props => (
    <div>
        <TextField
            label="Your search here"
            multiline={true}
            rows={1}
            rowsMax={4}
            value={props.searchText}
            onChange={props.handleChangeForChild('searchText')}
        />
    </div>
)

export default SearchTextArea;
