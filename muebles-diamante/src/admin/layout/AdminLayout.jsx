import styled from "styled-components";
import { SideBar, NavBar } from "../components";

const Layout = styled.aside`
    display: grid;
    grid-template-columns: 249px 1fr;
    grid-column-gap: 20px;
`;

export const AdminLayout = ({ children }) => {
  return (
    <Layout>
      {/* <NavBar/> */}

      <SideBar />

      {children}
      
    </Layout>
  );
};
