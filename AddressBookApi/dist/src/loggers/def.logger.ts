// address.controller.ts
// verbose
this.logger.verbose(`Address is found for id: ${id}`);

// debug
if (!address) {
  this.logger.debug(`Address not found for id:${id}`);
  throw new NotFoundException('Address not found');
}

// log
this.logger.log(
  `Address search is called with parameter: ${JSON.stringify(idParam)}`,
);

// warn
if (existingAddress) {
  this.logger.warn('duplicated address');
  throw new DuplicateAddressException(address.addressLine);
}

// address-validation.pipe.ts
this.logger.error(`${value.state} does not match with state: ${value.state}`);
