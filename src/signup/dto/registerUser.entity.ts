import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class registerUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  zipcode: number;
}
