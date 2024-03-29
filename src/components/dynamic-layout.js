import React from "react"
import styled from "styled-components"

const CellWrapper = styled.div`
  flex: 1;
`
const CellsContainer = styled.div`
  display: flex;
`
const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Cell = ({ element }) => <CellWrapper>{element}</CellWrapper>

const Row = ({ cells }) => (
  <CellsContainer>
    {cells.map((cell, index) => (
      <Cell key={index} element={cell} />
    ))}
  </CellsContainer>
)

const Rows = ({ rows }) =>
  rows.map((row, index) => <Row key={index} cells={row} />)

export const DynamicLayout = ({ structure }) => {
  return (
    <RowsContainer>
      <Rows rows={structure} />
    </RowsContainer>
  )
}
