import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Juel Sk. </span> Web Designer
          </h1>
          <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id harum dolorem. Impedit nihil iure quidem dolor sint, optio id ipsa assumenda doloribus molestiae facilis ipsam eligendi fuga ipsum tempora.</p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'>
            <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home