import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import hero from '../assets/hero-main.jpg'

const Hero = () => {
  return <Wrapper className="section-center borderTop">
    <article className="content">
      <h1 >design your comfort zone</h1>
      <p>Add a touch of class and sophistication to your home with our beautiful, handcrafted chesterfield sofas.</p>
      <Link to='/products' className='btn hero-btn'>Shop Now</Link>
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  background-image: url(${hero});
  
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-position: center;
  p {
    line-height: 2;
    max-width: 46em;
    margin-bottom: 2rem;
    color: var(--clr-grey-2);
    font-size: 1rem;
  }
  .content {
      margin-left: 2rem;
    }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`

export default Hero
