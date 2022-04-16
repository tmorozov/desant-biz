import React from "react"
import styled from "styled-components"
const HelpUkraineLink = styled.a`
  padding-left: 23px;
  display: inline-block;
  font-size: 16px;
`

export const HelpUkraine = () => {
  return (
    <HelpUkraineLink href="https://supportukrainenow.org/">
      STOP WAR IN UKRAINE &nbsp;
      <span role="img" aria-label="Flag of Ukraine">
        🇺🇦
      </span>
    </HelpUkraineLink>
  )
}
