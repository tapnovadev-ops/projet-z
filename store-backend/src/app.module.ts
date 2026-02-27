import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { SaleModule } from './sale/sale.module';
import { SaleItemModule } from './sale-item/sale-item.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseItemModule } from './purchase-item/purchase-item.module';
import { DailyAnalysisModule } from './daily-analysis/daily-analysis.module';

@Module({
  imports: [CategoryModule, ProductModule, CustomerModule, SupplierModule, SaleModule, SaleItemModule, PurchaseModule, PurchaseItemModule, DailyAnalysisModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
