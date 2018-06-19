function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();});
  return matchingDrivers;
  }
