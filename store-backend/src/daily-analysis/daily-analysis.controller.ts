import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyAnalysisService } from './daily-analysis.service';
import { CreateDailyAnalysisDto } from './dto/create-daily-analysis.dto';
import { UpdateDailyAnalysisDto } from './dto/update-daily-analysis.dto';

@Controller('daily-analysis')
export class DailyAnalysisController {
  constructor(private readonly dailyAnalysisService: DailyAnalysisService) {}

  @Post()
  create(@Body() createDailyAnalysisDto: CreateDailyAnalysisDto) {
    return this.dailyAnalysisService.create(createDailyAnalysisDto);
  }

  @Get()
  findAll() {
    return this.dailyAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyAnalysisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyAnalysisDto: UpdateDailyAnalysisDto) {
    return this.dailyAnalysisService.update(+id, updateDailyAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyAnalysisService.remove(+id);
  }
}
