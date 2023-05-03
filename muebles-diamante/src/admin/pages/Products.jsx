import { useEffect, useState } from "react";
import styled from "styled-components"
import { useFetch } from "../../hooks";
import { ProductItem } from '../components/'

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;    
  display: flex;
  align-items:center;
`;

const Table = styled.table`

  th,tr,td{
	border:1px solid #000;
	width:150px;
	height:45px;
	text-align:center;
  }
  
  th{
	color:#fff;
	background-color: #252525;
  }

 
`;



export const Products = () => {
  
    const url = 'http://localhost:5149/api/Furniture'

    const { data, isLoading, hasError } = useFetch(url);
    
  
    return (
      <Container>

        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Color</th>
            </tr>
          </thead>

          <tbody>

          {
          data?.map( product => (
            
            <ProductItem key={product.id} {...product}/>
            
          ))
        }
          </tbody>

        </Table>


        
      </Container>
    )
}
