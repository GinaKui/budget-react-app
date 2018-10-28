//import moment from 'moment'
const moment = require.requireActual('moment');

//this is where the mock (fake) moment library live

export default (timestamp = 0) => {
    return moment(timestamp);
}