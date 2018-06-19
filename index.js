function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver === name || driver.toUpperCase() === name;});
  return matchingDrivers;
  }
