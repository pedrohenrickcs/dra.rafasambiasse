import { useForm, SubmitHandler } from 'react-hook-form'
import InputMask from 'react-input-mask'

export type FormData = {
  name: string
  email: string
  phone: string
  cpf: string
  rg: string
  cep: string
  message: string
}

export type Items = {
  id: string
}

export const ContactForm = ({ id }: Items) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert('Mensagem enviada com sucesso!')
    } else {
      alert('Erro ao enviar mensagem.')
    }
  }

  return (
    <div
      className="w-full flex text-center flex-col xl:flex-row py-16 items-center bg-secondary-bg-color text-primary-text-color px-4 md:-mt-10"
      id={id}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-2/5 mx-auto p-6 rounded-lg shadow-md bg-primary-bg-color"
      >
        <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Nome é obrigatório' })}
            className="mt-1 block w-full px-3 py-2 bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none focus:border border- autofill:bg-primary-bg-color sm:text-sm"
          />
          {errors.name && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido',
              },
            })}
            className="mt-1 block w-full px-3 py-2 bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none focus:border focus:border-primary-500 sm:text-sm"
          />
          {errors.email && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Telefone
          </label>
          <div>
            <InputMask
              mask="(99) 99999-9999"
              type="tel"
              id="phone"
              className="mt-1 block w-full px-3 py-2 bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none focus:border focus:border-primary-500 sm:text-sm"
              {...register('phone', {
                required: 'Telefone é obrigatório',
                pattern: {
                  value: /^\(\d{2}\) \d{5}-\d{4}$/,
                  message: 'Telefone deve ter o formato (99) 99999-9999',
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="cpf"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            CPF
          </label>
          <div>
            <InputMask
              mask="999.999.999-99"
              {...register('cpf', {
                required: 'CPF é obrigatório',
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: 'CPF deve ter o formato 999.999.999-99',
                },
              })}
              type="text"
              id="cpf"
              className="mt-1 block w-full px-3 py-2
              bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none
              focus:border focus:border-primary-500 sm:text-sm"
            />
          </div>
          {errors.cpf && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.cpf.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="rg"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            RG
          </label>
          <div>
            <InputMask
              mask="99.999.999-9"
              {...register('rg', {
                required: 'RG é obrigatório',
                pattern: {
                  value: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
                  message: 'RG deve ter o formato 99.999.999-9',
                },
              })}
              type="text"
              id="rg"
              className="mt-1 block w-full px-3 py-2 bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none focus:border focus:border-primary-500 sm:text-sm"
            />
          </div>
          {errors.rg && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.rg.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="cep"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            CEP
          </label>
          <div>
            <InputMask
              mask="99999-999"
              {...register('cep', {
                required: 'CEP é obrigatório',
                pattern: {
                  value: /^\d{5}-\d{3}$/,
                  message: 'CEP deve ter o formato 99999-999',
                },
              })}
              type="text"
              id="cep"
              className="mt-1 block w-full px-3 py-2 bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none focus:border focus:border-primary-500 sm:text-sm"
            />
          </div>
          {errors.cep && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.cep.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Sua Mensagem
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Mensagem é obrigatória' })}
            className="mt-1 block w-full px-3 py-2 bg-primary-light-bg-color rounded-md shadow-sm focus:outline-none focus:border focus:border-primary-500 sm:text-sm"
          ></textarea>
          {errors.message && (
            <p className="text-xs text-white-text-color text-left mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-secondary-bg-color text-primary-light-bg-color py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
