import _ from 'lodash';
import network from './network';

export const getUsers = (params) => network
  .get('/search/users', { params })
  .then(async ({ items }) => {
    const users = _.slice(items, 0, 3);

    const completeUsers = await Promise
      .all(
        _.map(users, async userValue => await network.get(userValue?.url))
      );
    
    const repos = await Promise
      .all(
        _.map(users, async repoValue => {
          const reposTemp = await network.get(repoValue?.repos_url);
          return _.maxBy(reposTemp, r => r?.stargazers_count);
        })
      );

    return _.map(completeUsers, (user, index) => {
      return {
        ...user,
        repoName: repos[index]?.name,
        repoDescription: repos[index]?.description,
        repoStars: repos[index]?.stargazers_count,
      };
    });
  })
  .catch();
