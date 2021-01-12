import React from 'react';
import styled from 'styled-components';
import * as S from '../../config/style';
import Star from '../../assets/star.svg';

const Container = styled.a`
  width: 232px;
  height: 226px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  border: 0 solid;
  border-top-width: 6px;
  border-color: ${({ color }) => color};
  text-decoration: none;
`;

const Title = styled.p`
  width: 177px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${S.BLUE};
  word-break: break-word;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StarsContainer = styled.div`
  display: flex;
  margin: 16px 0;
`;

const StarsIcon = styled.img`
  margin-right: 4px;
`;

const Stars = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: ${S.OCEAN_BLUE};
`;

const Description = styled.p`
  width: 177px;
  font-size: 14px;
  line-height: 16px;
  color: ${S.GRAY2};
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RepoCard = ({ repo, color }) => (
  <Container color={color} href={repo?.html_url}>
    <Title>{repo?.name}</Title>
    <StarsContainer>
      <StarsIcon src={Star} />
      <Stars>{repo?.stargazers_count}</Stars>
    </StarsContainer>
    <Description>{repo?.description || 'None'}</Description>
  </Container>
);

export default RepoCard;
