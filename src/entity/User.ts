import { IsNotEmpty, Length } from 'class-validator';
import { Childern } from "./Childern";
import { Gender } from './Gender';
import { Marital_status } from './Marital_status';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
@Unique(['phone_nbr'])
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  public phone_nbr!: string;

  @Column({nullable: true})
  @Length(4, 100)
  public first_name!: string;

  @Column({nullable: true})
  @Length(4, 100)
  public last_name!: string;

  @Column({nullable: true})
  @Length(4, 100)
  public profile_name!: string;

  @Column({nullable: true})
  @Length(4, 100)
  public email!: string;

  @Column({nullable: true})
  @Length(4, 100)
  public date_of_birth!: Date;

  @Column({nullable: true})
  @Length(4, 100)
  public location_preference!: string;

  @Column({nullable: true})
  @Length(4, 100)
  public is_selfie_verified!: Boolean;

  @Column()
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;


  @ManyToOne(() => Childern)
  @JoinColumn()
  childern!: Childern

  @ManyToOne(() => Gender)
  @JoinColumn()
  gender!: Gender

  @ManyToOne(() => Marital_status)
  @JoinColumn()
  marital_status!: Marital_status
  
}
