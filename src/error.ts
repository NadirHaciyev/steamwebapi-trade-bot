import { AxiosError } from "axios";

type ErrorType = {
  message: string;
  status: number;
};

export class ApiError extends AxiosError {
  constructor(error: ErrorType) {
    super();
    this.name = "APIError";
    this.message = error.message;
    this.status = error.status;
  }
}
