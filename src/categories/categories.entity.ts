import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
