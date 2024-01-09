import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrCodeModule } from './qr-code/qr-code.module';
import { QrCodeService } from './qr-code/qr-code.service';
import { QrCodeController } from './qr-code/qr-code.controller';

@Module({
  imports: [QrCodeModule],
  controllers: [AppController,  QrCodeController],
  providers: [AppService, QrCodeService],
})
export class AppModule {}
