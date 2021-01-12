import _ from 'lodash';
import network from './network';

export const getTopRepositories = (params) => network
  .get('/search/repositories', { params })
  .then(({ items }) => _.slice(items, 0, 4))
  .catch();
