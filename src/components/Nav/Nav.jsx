import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BLUE } from '../../config/style';
import Search from '../../assets/search.svg';

export const NAV_HEIGHT = '64px';

const NavContainer = styled.div`
  width: 100%;
  height: ${NAV_HEIGHT};
  background-color: ${BLUE};
`;

const NavWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 13rem;
`;

const Input = styled.input`
  width: 31rem;
  border: unset;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  border-radius: 1rem;
  height: 100%;
  padding: .6rem 1rem .6rem 2.43rem;
  background: url(${Search}) no-repeat;
  background-color: white;
  background-position: 1rem center;
  color: ${BLUE};

  &:focus {
    outline: none;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;

const Nav = () => {
  const [query, setQuery] = useState('');
  const h = useHistory();

  const handleInput = (e) => {
    setQuery(e?.target?.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    h.push(`/search?q=${query}`);
  };

  return (
    <NavContainer>
      <NavWrapper>
        <Anchor href="/">GitHub</Anchor>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleInput}
            placeholder="Search"
            type="search"
            value={query}
          />
        </form>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
