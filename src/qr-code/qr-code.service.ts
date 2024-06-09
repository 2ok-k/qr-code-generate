import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { PrismaService } from 'src/prisma/prisma.service';

//npm install qrcode
@Injectable()
export class QrCodeService {
  constructor(private prisma: PrismaService) {}
  // async generateQrCode(data: string): Promise<string> {
  //   try {
  //     const qrCodeDataURL = await qrcode.toDataURL(data);
  //     return qrCodeDataURL;
  //   } catch (error) {
  //     throw new Error('Failed to generate QR code.');
  //   }
  // }
  async createUser(name: string, email: string): Promise<any> {
    try {
      const user = await this.prisma.users.create({
        data: {
          name,
          email,
        },
      });

      const qrCodeData = `Name: ${user.name}, Email: ${user.email}`;
      const qrCodeDataURL = await qrcode.toDataURL(qrCodeData);

      await this.prisma.users.update({
        where: { id: user.id },
        data: { qr_code: qrCodeDataURL },
      });

      return user;
    } catch (error) {
      throw new Error('Failed to create user.');
    }
  }

  async getUserQrCode(userId: number): Promise<string> {
    try {
      const user = await this.prisma.users.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new Error('User not found.');
      }

      return user.qr_code;
    } catch (error) {
      throw new Error('Failed to retrieve QR code.');
    }
  }
}
