import _ from 'lodash';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAsyncCallback } from 'react-async-hook';
import moment from 'moment';
import { users, repositories } from '../services';
import UserCard from '../components/UserCard/UserCard';
import RepoCard from '../components/RepoCard/RepoCard';
import * as S from '../config/style';
import { NAV_HEIGHT } from '../components/Nav/Nav';
import Spinner from '../components/Spinner/Spinner';

/**
 * This file is the main component in the project, that represents the Dashboard of the application.
 * Here we can see the use of the UserCard and RepoCard components that are respectively, the cards used for users and repositories.
 */

const repoColors = [S.OCEAN_BLUE, S.BLUE1, S.BLUE2, S.BLUE3];

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - ${NAV_HEIGHT});
  background-color: ${S.GRAY1};
`;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 13rem;
  padding-bottom: 163px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: ${S.BLUE};
  margin: 56px 0 32px 0;
  align-self: ${({ alignCenter }) => alignCenter ? 'center' : 'flex-start'};
`;

const Dashboard = () => {
  const query = new URLSearchParams(useLocation().search).get('q');

  const getQ = (date, type) => query ? `${query} in:${type} created:${date}` : `created:${date}`;

  const inTheLastMonth = moment().subtract(1, 'month').format('YYYY-MM-DD');
  const lastMonth = moment().subtract(1, "month").startOf("month").format('YYYY-MM-DD');
  const lastYear = moment().subtract(1, "year").startOf("year").format('YYYY-MM-DD');
  
  /**
   * The use of the useAsyncCallback costum hook makes the API requests handling easier, because it has handling for the result,
   * the request's loading state and also the errors that may happen in the request.
   */

  const {
    result: trendingUsers,
    execute: trendingExecute,
    loading: trendingLoading,
    error: trendingError,
  } = useAsyncCallback(
    () => users.getUsers({ q: getQ(inTheLastMonth, 'login'), sort: 'followers' }), []
  );
  const {
    result: mostActiveUsers,
    execute: mostActiveExecute,
    loading: mostActiveLoading,
    error: mostActiveError,
  } = useAsyncCallback(
    () => users.getUsers({ q: getQ(lastMonth, 'login') }), []
  );
  const {
    result: topRepositories,
    execute: repoExecute,
    loading: repoLoading,
    error: repoError,
  } = useAsyncCallback(
    () => repositories.getTopRepositories({ q: getQ(lastYear, 'name'), sort: 'stars' }), []
  );

  useEffect(() => {
    trendingExecute();
    mostActiveExecute();
    repoExecute();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const RateLimit = () => <Section alignCenter>Rate limit exceeded!</Section>;

  return (
    <Wrapper>
      <UsersContainer>
        {trendingLoading || mostActiveLoading || repoLoading
          ? <Spinner />
          : (
            <>
              <Section>Trending Users</Section>
              {trendingError
                ? <RateLimit />
                : (
                  <ListContainer>
                    {_.map(trendingUsers, user => <UserCard key={user?.id} user={user} />)}
                  </ListContainer>
                )}
              <Section>Most Active Users</Section>
              {mostActiveError
                ? <RateLimit />
                : (
                  <ListContainer>
                    {_.map(mostActiveUsers, user => <UserCard key={user?.id} user={user} />)}
                  </ListContainer>
                )}
              <Section>Top Repositories</Section>
              {repoError
                ? <RateLimit />
                : (
                  <ListContainer>
                    {_.map(topRepositories,
                      (repo, index) => <RepoCard key={repo?.id} color={repoColors[index]} repo={repo} />)}
                  </ListContainer>
                )}
            </>
          )}
      </UsersContainer>
    </Wrapper>
  );
};

export default Dashboard;
