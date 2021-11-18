import { Controller, Get, Inject, Query } from '@nestjs/common';
import AppServiceInterface from './app.service.interface';

@Controller()
export class AppController {
  constructor(
    @Inject('AppServiceInterface')
    private readonly appService: AppServiceInterface,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('callback')
  getCallBack(@Query('code') code): string {
    return this.appService.getCallback(code);
  }
}
