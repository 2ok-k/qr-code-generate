import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QrCodeController } from './qr-code.controller';
import { QrCodeService } from './qr-code.service';

@Module({
  controllers: [QrCodeController],
  providers: [QrCodeService, PrismaService],
})
export class QrCodeModule {}
