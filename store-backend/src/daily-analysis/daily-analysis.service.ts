import { Injectable } from '@nestjs/common';
import { CreateDailyAnalysisDto } from './dto/create-daily-analysis.dto';
import { UpdateDailyAnalysisDto } from './dto/update-daily-analysis.dto';

@Injectable()
export class DailyAnalysisService {
  create(createDailyAnalysisDto: CreateDailyAnalysisDto) {
    return 'This action adds a new dailyAnalysis';
  }

  findAll() {
    return `This action returns all dailyAnalysis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyAnalysis`;
  }

  update(id: number, updateDailyAnalysisDto: UpdateDailyAnalysisDto) {
    return `This action updates a #${id} dailyAnalysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyAnalysis`;
  }
}
