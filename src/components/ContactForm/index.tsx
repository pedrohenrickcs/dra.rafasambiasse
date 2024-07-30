import { useState } from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputMask from 'react-input-mask'
import Modal from '../common/Modal'

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

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setIsModalOpen(true)
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
        <Image
          src="/logo_v2.png"
          alt="Logo"
          width={250}
          height={250}
          className="margin-auto"
        />
        <h2 className="text-2xl font-medium my-4">Agende sua consulta:</h2>
        <h2 className="text-1xl font-medium mb-4">
          Preencha o formulário para agendar sua avaliação
        </h2>

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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-primary-bg-color">
          Mensagem enviada!
        </h2>
        <p className="text-primary-bg-color">
          Seu formulário foi enviado com sucesso. Em breve entraremos em
          contato.
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 px-4 py-2 bg-primary-bg-color text-white rounded-md"
        >
          Fechar
        </button>
      </Modal>
    </div>
  )
}
