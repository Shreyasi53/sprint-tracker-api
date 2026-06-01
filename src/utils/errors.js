export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

export class BusinessRuleError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }
}