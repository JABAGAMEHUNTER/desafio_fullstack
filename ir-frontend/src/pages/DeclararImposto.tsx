import { DeclaracaoResolver } from '@components/validations';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Nav } from 'src/components';
import {IsendDeclacarao} from 'src/interfaces';
import {DeclaracaoService} from 'src/services';

export function DeclararImposto() {
  const formMethods = useForm<IsendDeclacarao>({ resolver: DeclaracaoResolver});
  const { formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;

  async function onSubmit(values: any) {
      console.log(values);
      const { status, data } = await DeclaracaoService.createDeclaracao(values);
  //  if (status === 201) {
  //    reset()
  // }
      if (status === 201) {
        console.log('data', data);
        reset()
      }

  }
  return (
    <>
      <Nav />
      <div className="container">
      <h1>DeclararImposto</h1>
        <FormProvider {...formMethods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="ano_fiscal">Ano fiscal</label>
        <input {...register('ano_fiscal')} type="date"/>
          {errors?.ano_fiscal?.message && (
            <p className="error-text">{errors?.ano_fiscal?.message}</p>
          )}
        <label htmlFor="total_rendimentos_tributaveis">Total de rendimentos tributáveis</label>
          <input {...register('total_rendimentos_tributaveis')} type='text'></input>
          {errors?.total_rendimentos_tributaveis?.message && (
            <p className="error-text">{errors?.total_rendimentos_tributaveis?.message}</p>
          )}
        <label htmlFor="imposto_devido">Imposto devido</label>
          <input {...register('imposto_devido')} type='text'></input>
          {errors?.imposto_devido?.message && (
            <p className="error-text">{errors?.imposto_devido?.message}</p>
          )}
        <label htmlFor="imposto_restituir">Imposto a restituir</label>
          <input {...register('imposto_restituir')}type='text'></input>
          {errors?.imposto_restituir?.message && (
            <p className="error-text">{errors?.imposto_restituir?.message}</p>
          )}
        <label htmlFor="total_pagar">Total a pagar</label>
          <input {...register('total_pagar')} type='text'></input>
          {errors?.total_pagar?.message && (
            <p className="error-text">{errors?.total_pagar?.message}</p>
          )}
        <label htmlFor="saldo_imposto_pagar">Saldo de imposto a pagar</label>
          <input {...register('saldo_imposto_pagar')}type='text'></input>
          {errors?.saldo_imposto_pagar?.message && (
            <p className="error-text">{errors?.saldo_imposto_pagar?.message}</p>
          )}
        <label htmlFor="restituicao">Restituição</label>
          <input {...register('restituicao')}type='text'></input>
          {errors?.restituicao?.message && (
            <p className="error-text">{errors?.restituicao?.message}</p>
          )}
        <label htmlFor="total_rendimentos">Total de rendimentos</label>
          <input {...register('total_rendimentos')}type='text'></input>
          {errors?.total_rendimentos?.message && (
            <p className="error-text">{errors?.total_rendimentos?.message}</p>
          )}
        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </form>
      </FormProvider>
      </div>
    </>
  );
}
