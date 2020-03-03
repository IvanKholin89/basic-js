module.exports = function createDreamTeam(members) {
  var membersStr = [];
  var dreamTeam = '';
  if (!Array.isArray(members)) {
    return false;
  }
  for (var i of members) {
    if(typeof i === 'string') {
      membersStr.push(i.trim().toUpperCase());
    }
  };
  membersStr = membersStr.sort();
  for (var i of membersStr) {
      dreamTeam += i[0];
    }
  return dreamTeam;
};