import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service'

@Controller()
export class AppController {
  private appService: AppService

  constructor() {
    this.appService = new AppService()
  }
}
