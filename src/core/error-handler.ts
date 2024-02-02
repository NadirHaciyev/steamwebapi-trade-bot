import { AxiosError as BaseAxiosError } from "axios";

type ErrorType = {
  message: string;
  status: number;
};

export class InternalServerError extends BaseAxiosError {
  constructor(message: string) {
    super();
    this.name = "InternalServerError";
    this.message = message;
    this.status = 500;
  }
}

export class AxiosError extends BaseAxiosError {
  constructor(error: ErrorType) {
    super();
    this.message = error.message;
    this.status = error.status;
  }
}
