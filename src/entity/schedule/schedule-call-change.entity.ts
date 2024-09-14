import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "schedule_call_change" })
export class ScheduleCallChange {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
}
