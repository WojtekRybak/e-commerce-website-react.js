import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/hero-bcg2.jpeg'

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk"/>
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>Our story started with a problem (the best ideas usually do). Some ten years ago, our founder was furnishing his flat. Frustrated at the lack of well-designed, good quality and affordable sofas, he set about redefining the process. The concept was clear: collaborate with independent designers and makers to create pieces you’ll love, minus the mark-up. And so FR was born. The destination for creating your dream home.</p>
        </article>
      </Wrapper>
  </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  margin: 7rem auto;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    
    object-fit: contain;
  }
  p {
    line-height: 2;
    max-width: 45em;
    
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
