import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "schedule_call" })
export class ScheduleCall {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
}
