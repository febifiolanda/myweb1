import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Febi from '../images/febi.jpg';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Febi Fiolanda</h2>
            <img
              src={Febi}
              alt="avatar"
              style={{height: '300px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello, I’m Febi. I really like math, counting is my hobbies. I’m interesting on Front End Developer and UI/UX Designer.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-instagram" aria-hidden="true"/>
                   Febifldaas_
                  </ListItemContent>
                </ListItem>
{/* 
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    febyfiolanda@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                    Febi Fiolanda Sari S
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
