import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const BlogStyles = styled.div`
  max-width: 108rem;
  min-height: 100dvh;
  margin: 0 auto;
  padding-top: 9rem;
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 100%;
  gap: 2rem;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
`

export default function BlogHome() {
  const { blog } = useStaticQuery(graphql`
    query {
      blog: allSanityBloghome {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = blog
  return (
    <BlogStyles>
      {nodes.map(node => (
        <div key={node.id}>Encoded Blog</div>
      ))}
    </BlogStyles>
  )
}
