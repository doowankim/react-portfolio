import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #495057;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  line-height: 9.5em;
`;

export const Logo = styled.div`
  font-size: 2.5em;
  color: #f9f9f9;
  transition: 0.35s;
  cursor: pointer;

  div {
    display: inline-block;
    color: #fff;
    font-weight: bold;
  }
`;

export const Menu = styled.div`
  display: flex;
  padding-left: 52px;
  align-items: center;
  flex: 1;
`;

export const SLink = styled(Link)`
  li {
    display: inline-block;
    height: 47px;
    font-size: 1.6em;
    font-weight: 500;
    color: #fff;
    margin-right: 16px;
    cursor: pointer;
    transition: 0.35s;

    &:hover {
      color: #909090;
      transition: 0.35s;
    }
  }
`;

export const SideMenu = styled.div`
  display: flex;
`;

export const Icon = styled.i`
  position: relative;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  margin-top: 10px;
  margin-left: 15px;
  transition: 0.35s;

  &:hover {
    transition: 0.35s;
    color: #909090;
  }
`;
