import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { QrCodeController } from './qr-code/qr-code.controller';
import { QrCodeModule } from './qr-code/qr-code.module';
import { QrCodeService } from './qr-code/qr-code.service';

@Module({
  imports: [QrCodeModule],
  controllers: [AppController, QrCodeController],
  providers: [AppService, QrCodeService, PrismaService],
})
export class AppModule {}
