import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Declaracao } from "src/declaracao/entities/declaracao.entity"

@Entity()
export class Rendimento {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: false, nullable:true,})
    nome_rendimemto: string 

    @Column({unique: false, nullable:true,})
    origem_rendimento: string

    @Column({ nullable:true,})
    valor: number

    @Column({ type: 'date', unique: false, nullable:true,})
    ano_fiscal: Date 

    @Column({unique: false, nullable:true,})
    isActive: boolean

    @ManyToOne(() => Declaracao, (declaracao) => declaracao.rendimentos)
    declaracao: Declaracao
}


