import React, { Component } from 'react';

//--------Let's wrap a theme around our project--------//
//--------this requires imports--------//
// import a provider
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import a theme creator
import { createMuiTheme } from '@material-ui/core/styles';
// import colors
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
//--------end theme imports--------//

import SearchTextArea from '../SearchTextArea/SearchTextArea';
import SearchButton from '../SearchButton/SearchButton';


// establish a color pallete
const myTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
    // constrastThreshold can be used to ensure differently-abled folks can see the site elements
    constrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

// functions

// consoleLogSearch = () => {};

//--------Desctructuring--------//
/* destructuring is a fast way of getting a property of the object 
when the entire object is not desired */
// line 1 could also be written as the following two lines (i.e. not destructured):

// import React from 'react';
// const Component = React.Component;
//--------**************--------//

const emptyText = {};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: {
        searchText: emptyText,
      }
    }
  }

  //functions 

  handleChangeFor = propertyName => event => {
    console.log('searchField says: ', event.target.value);
    this.setState({
      userInput: {
        ...this.state.userInput,
        [propertyName]: event.target.value,
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userInput.searchText);
    this.setState({
      searchText: emptyText
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <div>
          {JSON.stringify(this.state)}
          <SearchTextArea handleChangeForChild={this.handleChangeFor}/> 
          <SearchButton handleSubmitChild={this.handleSubmit}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
