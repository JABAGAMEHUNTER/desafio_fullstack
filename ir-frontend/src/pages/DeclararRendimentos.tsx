import { IDeclaracaoRendimento } from 'src/interfaces';
import { DeclaracaoRendimentoResolver } from '@components/validations';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Nav } from 'src/components';

export function DeclararRendimentos() {
  const formMethods = useForm<IDeclaracaoRendimento>({ resolver: DeclaracaoRendimentoResolver });
  const { formState: { errors },
    register,
    handleSubmit,
    reset,
    } = formMethods;


  function onSubmit(values: any) {
    console.log(values);
    if (status === 201) {
      reset()
    }
  }
  return (
    <>
      <Nav />
      <div className="container">
      <h1>Rendimentos</h1>
        <FormProvider {...formMethods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nome_rendimemto">Nome do rendimento</label>
        <input {...register('nome_rendimemto')} type='text'></input>
        {errors?.nome_rendimemto?.message && (
          <p className="error-text">{errors?.nome_rendimemto?.message}</p>
        )}
        <label htmlFor="origem_rendimento">Origem do rendimento</label>
        <input {...register('origem_rendimento')} type='text'></input>
        {errors?.origem_rendimento?.message && (
          <p className="error-text">{errors?.origem_rendimento?.message}</p>
        )}
        <label htmlFor="valor">Valor</label>
        <input {...register('valor')}type='text'></input>
        {errors?.valor?.message && (
          <p className="error-text">{errors?.valor?.message}</p>
        )}
        <label htmlFor="ano_fiscal">Ano fiscal</label>
        <input {...register('ano_fiscal')} type="date"/>
        {errors?.ano_fiscal?.message && (
          <p className="error-text">{errors?.ano_fiscal?.message}</p>
        )}
        <Button type="submit" variant="primary">Enviar</Button>
      </form>
      </FormProvider>
      </div>
    </>
  );
}
