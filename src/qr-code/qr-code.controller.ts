import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';

@Controller('qr-code')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  // @Get()
  // async generateQrCode(@Query('data') data: string) {
  //   const qrCodeDataURL = await this.qrCodeService.generateQrCode(data);
  //   return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  // }
  @Post('create-user')
  async createUser(@Body() createUserDto: { name: string; email: string }) {
    const user = await this.qrCodeService.createUser(
      createUserDto.name,
      createUserDto.email,
    );
    return user;
  }

  @Get(':id')
  async getUserQrCode(@Param('id') id: string) {
    const qrCodeDataURL = await this.qrCodeService.getUserQrCode(Number(id));
    return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
}
