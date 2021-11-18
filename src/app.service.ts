import AppServiceInterface from './app.service.interface';

export class AppService implements AppServiceInterface {
  getHello(): string {
    return 'Hello World!';
  }

  getCallback(code: string): string {
    return 'Responding to callback, code: ' + code;
  }
}
