import { PartialType } from '@nestjs/swagger';
import { CreateDailyAnalysisDto } from './create-daily-analysis.dto';

export class UpdateDailyAnalysisDto extends PartialType(CreateDailyAnalysisDto) {}
