import { HttpClient } from '../utils/request';
import {
  PredictionRequest,
  PredictionResponse,
  ForecastingRequest,
  ForecastingResponse,
} from '../types';

export class NeuralHandler {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  // Method to handle prediction requests
  public async predict(data: PredictionRequest): Promise<PredictionResponse> {
    const response = await this.client.post<PredictionResponse>(
      '/predict',
      data
    );
    return response.data;
  }

  // Method to handle forecasting requests
  public async forecast(
    data: ForecastingRequest
  ): Promise<ForecastingResponse> {
    const response = await this.client.post<ForecastingResponse>(
      '/forecast',
      data
    );
    return response.data;
  }
}
