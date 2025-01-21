import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "src/user/entities/user.entity"
import { Rendimento } from "src/rendimentos/entities/rendimento.entity"

@Entity()
export class Declaracao {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date', unique: false, nullable:true,})
    ano_fiscal: Date 

    @Column({unique: false, nullable:true,})
    total_rendimentos_tributaveis: number

    @Column({unique: false, nullable:true,})
    imposto_devido: number

    @Column({unique: false, nullable:true,})
    imposto_restituir: number

    @Column({unique: false, nullable:true,})
    total_pagar: number

    @Column({unique: false, nullable:true,})
    saldo_imposto_pagar: number

    @Column({unique: false, nullable:true,})
    restituicao: number

    @Column({unique: false, nullable:true,})
    total_rendimentos: number

    @ManyToOne(() => User, (user) =>  user.declaracoes)
    user: User

    @OneToMany(() => Rendimento, (rendimento) => rendimento.declaracao)
    rendimentos: Rendimento[]
}


