import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs} from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid  style={{background: 'url(https://1.bp.blogspot.com/-kI3by9AAh-I/WCFAj-D1rmI/AAAAAAAAAdw/6RS7_iFq5hgXZiE-614EpnO7jMRbh3LLACEw/s640/web-design-concept-with-drawings_1134-77.jpg) center/cover'}}className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h1 > Hi! I'm Febi <br/>Front-End Developer & UI/UX Designer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank" aria-label="true">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank" aria-label="true">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank" aria-label="true">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank" aria-label="true">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
          </div>
        </div>
          
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
