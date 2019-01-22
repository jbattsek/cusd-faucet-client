import React, { Component } from 'react';
import withRoot from '../withRoot';

// Material-ui
import { withStyles } from '@material-ui/core/styles';

// Core Wallet Components
import Accounts from './homePageComponents/Accounts'
import EosButton from './homePageComponents/EosButton'


const styles = theme => ({
});

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
          <div>
           
            
            {/* MINT */}
            <EosButton />
            
            
          </div>
    );
  }
}

HomePage.propTypes = {
};

export default withRoot(withStyles(styles)(HomePage));
