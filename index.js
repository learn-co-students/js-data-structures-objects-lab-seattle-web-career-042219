// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver, {[key]: value});
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  Object.assign(driver, {[key]: value});
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newCopy = Object.assign({}, driver);
  delete newCopy[key];
  return newCopy;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}
