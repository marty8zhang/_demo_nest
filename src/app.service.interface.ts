export default interface AppServiceInterface {
  getHello(): string;

  getCallback(code: string): string;
}
