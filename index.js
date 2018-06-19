function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();});
  return matchingDrivers;
  }

function fuzzyMatch() {
  let matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase().slice(0,2) === name.toLowerCase().slice(0,2);});
  return matchingDrivers;
}
