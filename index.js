function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver.slice(0,1).toLowerCase() === name.slice(0,1).toLowerCase();});
  return matchingDrivers;
  }

function fuzzyMatch() {
  let matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();});
  return matchingDrivers;
}