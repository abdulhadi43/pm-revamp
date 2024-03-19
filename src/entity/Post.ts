import { Length } from 'class-validator';
//import { User } from './User';
import { Category } from './Category';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @Length(4, 100)
  public title!: string;

  @Column()
  @Length(4, 100)
  public slug!: string;

  @Column()
  @Length(4, 100)
  public content!: string;

  @Column()
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;

  // @ManyToOne(() => User, user => user.posts)
  // user!: User;

  @OneToMany(() => Category, category => category.post)
  category!: Category;
}
