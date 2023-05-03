import React from 'react'
import styled from 'styled-components';

const Tr = styled.tr`

	background-color:#eee;
`
export const ProductItem = ({id, precio, descripcion, nombre, image, color}) => {
  return (
    <Tr>
      
      <td>
        {nombre}
      </td>
      <td>
        {precio}
      </td>
      <td>
        {descripcion}
      </td>
      <td>
        {color}
      </td>
    </Tr>
  )
}
