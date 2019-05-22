import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Gambar1 from '../images/gambar1.png';

class Portofolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* TA-web2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/vHLWNxf/image.png) center / cover'}} >TA-WEB2</CardTitle>
            <CardText>
            Tugas Akhir Web2 membuat website untuk pemesanan makanan dengan menggunakan laravel 
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/febifiolanda" target="_blank" aria-label="silahkan buka"> GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Android-GunungSewu */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/ZHV7D55/gunungsewu.png) center / cover'}} >Gunung Sewu</CardTitle>
            <CardText>
             Tugas Akhir Akhir membuat aplikasi paket wisata Gunung Sewu 
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/febifiolanda" target="_blank" aria-label="silahkan buka">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*SmartEco */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/S0pX60m/smarteco.jpg) center / cover'}} >SmartEco</CardTitle>
            <CardText>
              PKM SmartECo
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Galantyas/smarteco" target="_blank" aria-label="silahkan buka">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/6r05wgd/dwef.png) center / cover'}} >Animasi</CardTitle>
            <CardText>
              membuat animasi berjalan 
            </CardText>
            <CardActions border>
              <Button colored href="https://i.ibb.co/6r05wgd/dwef.png" target="_blank" aria-label="silahkan buka">View</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/ChRpH9G/idahooo.png) center / cover'}} >Bangunan Idaho</CardTitle>
            <CardText>
              membuat desain bangunan 3D 
            </CardText>
            <CardActions border>
              <Button colored href="https://i.ibb.co/ChRpH9G/idahooo.png" target="_blank" aria-label="silahkan buka">View</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/9vtYZNY/lowly-1.png) center / cover'}} >lowpoly</CardTitle>
            <CardText>
            lowpoly
            </CardText>
            <CardActions border>
              <Button colored href="https://i.ibb.co/9vtYZNY/lowly-1.png" target="_blank" aria-label="silahkan buka">View</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs className="color" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{textDecoration: 'none', color: 'black'}}>Website</Tab>
          <Tab style={{textDecoration: 'none', color: 'black'}}>Design</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Portofolio;
