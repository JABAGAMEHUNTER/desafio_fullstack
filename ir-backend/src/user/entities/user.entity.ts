import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Declaracao } from 'src/declaracao/entities/declaracao.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Declaracao, (declaracao) => declaracao.user)
  declaracoes: Declaracao[]
}
