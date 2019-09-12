import { CallerSherpa } from '../utils/APICaller'
export default {
  index(auth_token) {
    return CallerSherpa('advertiser_accounts', 'GET', {}, auth_token)
  },
  create(email, auth_token) {
    return CallerSherpa('advertiser_accounts', 'POST', email, auth_token)
  },
  delete(email, auth_token) {
    return CallerSherpa(`advertiser_accounts/delete`, 'DELETE', email, auth_token)
  }
};
