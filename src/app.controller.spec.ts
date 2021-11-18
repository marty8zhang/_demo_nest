import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mocked } from 'ts-jest/utils';

// Mock method 1:
jest.mock('./app.service');
// Mock method 2:
// const mockGetHello = jest.fn();
// jest.mock('./app.service', () => ({
//   AppService: jest.fn().mockImplementation(() => ({
//     getHello: mockGetHello,
//     getCallback: jest.fn(),
//   })),
// }));

describe('AppController', () => {
  const mockAppService = mocked(AppService, true);
  let appController: AppController;

  beforeEach(async () => {
    // Mock method 1:
    mockAppService.prototype.getHello.mockReturnValue('Hello');
    mockAppService.prototype.getHello.mockClear();
    // Mock method 2:
    // mockGetHello.mockReturnValue('Hello');
    // mockGetHello.mockClear();

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: 'AppServiceInterface',
          useClass: AppService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const result = appController.getHello();

      // Mock method 1:
      expect(mockAppService.prototype.getHello).toBeCalledTimes(1);
      // Mock method 2:
      // expect(mockGetHello).toBeCalledTimes(1);
      expect(result).toBe('Hello');
    });
  });
});
