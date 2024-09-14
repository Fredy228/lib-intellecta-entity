import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "schedule_part" })
export class SchedulePart {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
}
