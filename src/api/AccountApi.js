import { CallerSherpa } from '../utils/APICaller'
export default {
  login(user) {
    return CallerSherpa("sessions", "POST", user)
  }
};