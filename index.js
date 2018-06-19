function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver === name || driver === name.toUpperCase();});
  return matchingDrivers;
  }
