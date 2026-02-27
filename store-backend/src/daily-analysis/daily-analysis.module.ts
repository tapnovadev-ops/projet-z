import { Module } from '@nestjs/common';
import { DailyAnalysisService } from './daily-analysis.service';
import { DailyAnalysisController } from './daily-analysis.controller';

@Module({
  controllers: [DailyAnalysisController],
  providers: [DailyAnalysisService],
})
export class DailyAnalysisModule {}
