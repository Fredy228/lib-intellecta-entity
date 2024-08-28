//Entity
import { User, UserDevices } from "./entity/user/user.entity";
import { Profile } from "./entity/user/proflle.entity";
import { Moderator } from "./entity/user/admin.entity";
import { Owner } from "./entity/user/owner.entity";
import { Teacher } from "./entity/user/teacher.entity";
import { Student } from "./entity/user/student.entity";
import { University } from "./entity/university/university.entity";
import { Subject } from "./entity/university/subject.entity";
import { Faculty } from "./entity/university/faculty.entity";
import { Group } from "./entity/group/group.entity";
import { Icon } from "./entity/icon.entity";
import { SupportMessage } from "./entity/support-message.entity";

export { User, UserDevices } from "./entity/user/user.entity";
export { Profile } from "./entity/user/proflle.entity";
export { Moderator } from "./entity/user/admin.entity";
export { Owner } from "./entity/user/owner.entity";
export { Teacher } from "./entity/user/teacher.entity";
export { Student } from "./entity/user/student.entity";
export { University } from "./entity/university/university.entity";
export { Subject } from "./entity/university/subject.entity";
export { Faculty } from "./entity/university/faculty.entity";
export { Group } from "./entity/group/group.entity";
export { Icon } from "./entity/icon.entity";
export { SupportMessage } from "./entity/support-message.entity";

export const ALL_ENTITIES = [
  User,
  UserDevices,
  Profile,
  Moderator,
  Owner,
  Teacher,
  Student,
  University,
  Subject,
  Faculty,
  Group,
  Icon,
  SupportMessage,
];

//Enum
export * from "./enum/icon.enum";
export * from "./enum/role.enum";
export * from "./enum/support-messages.enum";

//Type
export * from "./type/user.type";
