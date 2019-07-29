import { Component } from 'react'
import Layout from '../components/Layout'

class Portfolio extends Component {
  render () {
    return <Layout>
      <div className='o-main-container'>
        <h2>Portfolio</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='#'>
            <img src='/static/images/ruby.jpg' alt='A Ruby logo' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>I have done a few simple apps using Ruby on Rails but this website you are reading now was my first full web app built with Rails. It includes an admin panel for adding, updating and deleting articles which in the future could be available to users to add their own articles to the site.</p>
            <p>The CSS has been written with BEM and Namespaces and I have used SASS to enable nesting of styles. The SASS files have been broken down into objects and components to help with the organisation which in the future will make it easy to update parts of the site.</p>
            <p>The Ruby on Rails front-end was stripped out and was rebuilt using ReactJS, NextJS and GraphQL was implemented to interact with the database.</p>
          </div>
        </div>

        <h2>Yummy Pixels - Redesign &amp; Build</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='http://www.yummypixels.co.uk/'>
            <img src='/static/images/yummypixels-logo.png' alt='Yummy Pixels logo' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>Yummy Pixels is a food and travel blog and contains recipes from the YummyEats cookbook along with some travel inspiration in the form of travel itineraries.</p>
            <p>Originally, it was a WordPress template and was in some serious need of a redesign. I started by creating the wireframes for the site before taking those ideas and building the site with ReactJS along with NextJS for server-side rendering.</p>
            <p>If you want to try out the recipes or you’re interested in travelling, checkout the <a href='http://www.yummypixels.co.uk/' className='c-portfolio-project__link' target='blank'>Yummy Pixels</a> website.</p>
          </div>
        </div>

        <h2>Day Tripper Tours - Example Ecommerce Site</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://sick-fits-front-end.herokuapp.com/'>
            <img src='/static/images/day-trippers.jpg' alt='Ecommerce example' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>I have been wanting to get into ecommerce web development for a while so decided to do the Wes Bos Full Stack Advanced React and Graphql course.</p>
            <p>The backend was built with Graphql Yoga and Prisma and the front end is ReactJS and NextJS with Apollo Client and tests were added using Jest. The site features include pagination, taking payments with Stripe and tour search functionality.</p>
            <p>The site can be viewed at <a href='https://sick-fits-front-end.herokuapp.com/' className='c-portfolio-project__link' target='blank'>Day Tripper Tours</a> but you will need to sign up for an account (using any fake email should be fine) to login or sign in using signin@signin.com for email and password for password to see the full functionality of the site.</p>
          </div>
        </div>

        <h2>Rock, Paper, Scissors</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://codepen.io/paulbrighton/pen/ydpeea'>
            <img src='/static/images/rock.png' alt='An animated rock' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>After completing the HTML and CSS part of the ProCoders course, I moved on to learning JavaScript and my first project was to build a Rock, Paper, Scissors game.</p>
            <p>This includes clickable images and a score board that updates and lets the player know whether they have won the game or lost to the computer, it will then ask the player if they want to play again.</p>
            <p>Interested? You can play the <a href='https://codepen.io/paulbrighton/pen/ydpeea' className='c-portfolio-project__link'>Rock, Paper, Scissors game using this link</a> or clicking on the image above.</p>
          </div>
        </div>

        <h2>Etch-a-Sketch</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://codepen.io/paulbrighton/pen/rqOGYK'>
            <img src='/static/images/Etch A Sketch.png' alt='An animated etch a sketch' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>My second challenge was to use DOM manipulation to make a digital version of the popular Etch-A-Sketch toy. </p>
            <p>It uses many divs on the screen that can be filled in with a different colour in order to let the user create images with the mouse. It also gives the user the option to change the thickness of the line they want to use to draw their pictures.</p>
            <p>Get arty with the <a href='https://codepen.io/paulbrighton/pen/rqOGYK' className='c-portfolio-project__link'>Etch-a-Sketch toy</a> and view the code on CodePen.</p>
          </div>
        </div>

        <h2>Calculator</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://codepen.io/paulbrighton/pen/VEvMRL'>
            <img src='/static/images/calculator.png' alt='An animated calculator' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>My final challenge was to create a simple calculator using CSS, HTML and JavaScript. The calculator allows you to add, subtract, divide and multiply numbers by clicking the buttons with a mouse.</p>
            <p>When styling the calculator, I used CSS Grid to layout the buttons, something I had not used before but is a very useful tool for laying out pages in CSS.</p>
            <p>Need to do some sums, use my <a href='https://codepen.io/paulbrighton/pen/VEvMRL' className='c-portfolio-project__link'>JavaScript calculator</a> online on the CodePen website.</p>
          </div>
        </div>

        <h2>Android Logo</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://codepen.io/paulbrighton/pen/XxmzJG'>
            <img src='/static/images/android.png' alt='An animated Android logo' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>I have to admit, I did use an online tutorial that can be viewed here to build the Android logo, but it was good experience as it was more complex than anything I had done before with CSS. If there’s one way to get better at CSS, it’s practice, practice, practice. </p>
            <p>It uses CSS transform to allow the head and arms to move when the mouse cursor is hovered over.</p>
            <p>The code that was used to make The Android Logo is <a href='https://codepen.io/paulbrighton/pen/XxmzJG' className='c-portfolio-project__link'>available on CodePen</a>.</p>
          </div>
        </div>

        <h2>Gnomegeddon</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://gnomegeddon.herokuapp.com/'>
            <img src='/static/images/gnomegeddon.png' alt='The Gnomegeddon logo' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>My final assignment at university was to design, market and build a website for a game called Gnomegeddon made by the game design students at the university centre.</p>
            <p>This was an improvement on my first website due to it being responsive and including things like a full screen video header, a dropdown navigation menu and it was designed as a single page website due to the amount of content that was available.</p>
            <p>Checkout the <a href='https://gnomegeddon.herokuapp.com/' className='c-portfolio-project__link'>Gnomegeddon website</a> or download and play it for free, courtesy of <a href='https://angrydwarfstudios.itch.io/gnomegeddon-war-of-the-gardens' className='c-portfolio-project__link'>Angry Dwarf Studios</a>.</p>
          </div>
        </div>

        {/* <h2>Abandoned Container</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://abandoned-container.herokuapp.com/'>
            <img src='/static/images/container.jpg' alt='A shipping container' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>My first assignment at the University Centre at Wakefield College was to build a website for an inanimate object within 500 metres of my home.</p>
            <p>The website was based on a shipping container and was the first full website that I have built, it was only a fixed width site but provided me with the basic HTML and CSS skills that I would need in the future.</p>
            <p><a href='https://abandoned-container.herokuapp.com/' className='c-portfolio-project__link'>The Abandonded Container</a> website is still available to view online.</p>
          </div>
        </div> */}

        <h2>Yummy Eats Cookbook</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://itunes.apple.com/gb/book/yummy-eats/id1095148851?mt=11'>
            <img src='/static/images/yummyeats.png' alt='Yummy Eats cookbook cover' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>I really wanted to make a cookbook and that is where I learned some design for print skills using Adobe InDesign. The cookbook is called Yummy Eats and contains 50 of my favourite dishes from around the world.</p>
            <p>All the recipes and photography are by myself apart from some Brazilian dishes that were written by my wife, Thais. Thais was also responsible for the food styling in all my food photography.</p>
            <p>The book is available as a digital download at <a href='https://itunes.apple.com/gb/book/yummy-eats/id1095148851?mt=11' className='c-portfolio-project__link'>iBooks</a> and <a href='https://www.amazon.co.uk/dp/B01DFPXFEY' className='c-portfolio-project__link'>Amazon</a>.</p>
          </div>
        </div>

        <h2>Stock Photography</h2>
        <div className='c-header-divider' />
        <div className='c-portfolio-project'>
          <a href='https://www.shutterstock.com/g/paulbrighton76'>
            <img src='/static/images/chickenskewers.jpg' alt='Chicken skewers with pepper and onion' className='c-portfolio-project__img' />
          </a>
          <div className='c-portfolio-project__text'>
            <p>I have been a photographer since 2011 and my interest in travel led me into food photography.</p>
            <p>I have a <a href='https://www.shutterstock.com/g/paulbrighton76' className='c-portfolio-project__link'>portfolio on Shutterstock</a> of over 3400 images, mainly of food from around the world but there is some travel photography in there too. I also have my portfolio available on other stock photography sites such as iStock and Adobe Stock.</p>
          </div>
        </div>
      </div>
    </Layout>
  }
}

export default Portfolio
