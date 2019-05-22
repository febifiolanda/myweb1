import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Febi from '../images/febi.jpg';

class Profile extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Febi}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Febi Fiolanda Sari S</h2>
            <h4 style={{color: 'grey'}}>Front-End Developer & UI/UX Designer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hello, I’m Febi. I really like math, counting is my hobbies. I’m interesting on Front End Developer and UI/UX Designer</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Jl. T Imam Bonjol, Gg. Humala No. 1, Binjai, Sumatera Utara</p>
            <h5>Phone</h5>
            <p>082135782690</p>
            <h5>Email</h5>
            <p>febyfiolanda@gmail.com</p>
            <h5>Linkedin</h5>
            <p>linkedin.in/febifiolanda</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2020}
              schoolName="Universitas Gadjah Mada"
              schoolDescription="D3 Computer Science and Information System"
               />

               <Education
                 startYear={2014}
                 endYear={2017}
                 schoolName="SMA N 1 Binjai"
                 schoolDescription="Graduated from Science Program"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2020}
              jobName="Himakomsi"
              jobDescription="Divisi ADPA"
              />

              <Experience
                startYear={2017}
                endYear={2018}
                jobName="BEM KM UGM"
                jobDescription="Kewirus"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Profile;
