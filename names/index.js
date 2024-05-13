const nameList = require('../country/state/city/index.js')
const firstNameList = require('../utilities/utils/index.js')
const getPeopleInCity = nameList => {
  return firstNameList(nameList)
}
module.exports = getPeopleInCity
