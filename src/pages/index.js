import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import { GiCheeseWedge } from 'react-icons/gi'

const StyledButton = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  margin-top: 2rem;
  padding: 0;
  font-size: 6rem;
  background-color: #f2d4ab;
  border: 0;
  border-radius: 50rem;
  appearance: none;
  justify-content: center;
  text-align: center;
  align-items: center;

  a {
    width: 1em;
    height: 1em;
    color: black;
    text-align: center;
  }
`

const H1 = styled.h1`
  font-family: 'Pacifico', cursive;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>SayCheese!</H1>
      <div>
        <StyledButton aria-label="Start">
          <Link to="/what">
            <GiCheeseWedge />
          </Link>
        </StyledButton>
      </div>
    </Layout>
  )
}

export default IndexPage
