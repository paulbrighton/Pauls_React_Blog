import { Component } from 'react'
import Layout from '../components/Layout'

class About extends Component {
  render () {
    return <Layout>
      <div className='o-main-container'>
        <section className='c-about'>
          <h2>About Me</h2>
          <div className='c-header-divider' />
          <div className='o-about-intro__container'>
            <div className='c-about__text'>
              <p>I’m Paul and I am currently seeking my first role as a Front-End Developer after studying web design and development for the last couple of years.</p>
              <p>My background for the last 7 years is working as a food and commercial photographer mainly with a focus on food and travel and I have my portfolio of over 3000 images on some of the main stock photography sites including Shutterstock and Adobe Stock.</p>
              <p>Although photography is a passion of mine, after releasing my first cookbook (Yummy Eats) which I put together using InDesign I found that I really loved graphic design and wanted to pursue it further.</p>
              <p>This led me into the world of web development in which I have been studying ever since. I have passed my Adobe Dreamweaver CC ACA exam and completed a Level 3 RQF course in web design and development. I also completed the first year of the FdA Creative and Digital Industries course at the University Centre at Wakefield College in which I passed with merit.</p>
              <p>I decided not to do my second year at university due to the lecturer leaving the course and a suitable lecturer not been available for the second year. This led me into looking for other web development courses and I found that the &#123;Pro&#125;Coders course covered the skills I would need to pursue a career as a developer.</p>
            </div>
          </div>
        </section>

        <section className='c-about-cv'>
          <h2>CV</h2>
          <div className='c-header-divider' />
          <div className='c-about-cv__category'>
            <h3>Education</h3>
            <div className='c-about-cv__category-info'>
              <h4>&#123;Pro&#125;Coders Full Stack Developer Course</h4>
              <p>&#123;Pro&#125;Coders</p>
              <p>06/2018 - 03/2018</p>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>FdA Creative and Digital Industries</h4>
              <p>Wakefield College University Centre</p>
              <p>09/2017 - 06/2018</p>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>Web Design and Development Certificate (RQF) Level 3</h4>
              <p>Stonebridge Associated Colleges</p>
              <p>06/2016 - 04/2017</p>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>Adobe Dreamweaver CC (ACA)</h4>
              <p>Prodigy Learning - LearnKey Training for ACA</p>
              <p>04/2016 - 03/2017</p>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>Digital Studio Photography</h4>
              <p>Leeds College of Technology</p>
              <p>04/2011 - 06/2011</p>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>TEFL/TESOL Course (85 hours online and 20 hours classroom based)</h4>
              <p>I-to-I UK</p>
              <p>08/2008 to 12/2008</p>
            </div>
          </div>
          <div className='c-about-cv__category c-about-cv__category-lists'>
            <h3>Skills and Abilities</h3>
            <ul>
              <li>HTML and CSS;</li>
              <li>SASS;</li>
              <li>JavaScript;</li>
              <li>Ruby (on Rails);</li>
              <li>Git and GitHub;</li>
              <li>ReactJS;</li>
              <li>NextJS;</li>
              <li>Gulp;</li>
              <li>Basic knowledge of Adobe InDesign;</li>
              <li>Good knowledge of Photoshop - Photography and Web Design;</li>
              <li>Image processing and retouching;</li>
              <li>Good communication skills;</li>
              <li>Ability to prioritise work to meet schedules;</li>
            </ul>
          </div>
          <div className='c-about-cv__category'>
            <h3>Work Experience</h3>
            <div className='c-about-cv__category-info'>
              <h4>Front End Developer - Shift Commerce</h4>
              <p>02/2018 - 03/2018</p>
              <ul>
                <li>Three weeks commercial/work experience asisting the Ruby on Rails front end development team, working on a large uk retail company ecommerce website.</li>
                <li>I also got to contribute to daily stand-ups and weekly retrospectives and learnt new skills such as Gulp and working with content management systems.</li>
              </ul>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>Stock Photographer</h4>
              <p>09/2011 - Present</p>
              <ul>
                <li>Food Stock Photography</li>
                <li>Contributor with an extensive portfolio focusing on Commercial and Food Photography available in various stock websites such as iStock (Getty), Shutterstock and Adobe Stock.</li>
                <li>Designer and author of Yummy Eats cookbook ePub available for sale on iBooks and Amazon.</li>
              </ul>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>Photographer - Everyscape</h4>
              <p>02/2014 - 02/2015</p>
              <ul>
                <li>Photographing 360 degree panorama images used to produce virtual tours for businesses in the UK.</li>
              </ul>
            </div>
            <div className='c-about-cv__category-info'>
              <h4>Product Photographer - Trade Furniture Company</h4>
              <p>03/2013 - 06/2015</p>
              <ul>
                <li>Producing images of solid wood furniture.</li>
              </ul>
            </div>
          </div>
          <div className='c-about-cv__category c-about-cv__category-lists'>
            <h3>Hobbies and Interests</h3>
            <ul>
              <li>Travelling and interacting with different cultures;</li>
              <li>Technology;</li>
              <li>Photography;</li>
              <li>Web Design and Development;</li>
              <li>Arthouse and Foreign Movies;</li>
              <li>News and current affairs;</li>
              <li>Formula 1</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  }
}

export default About
