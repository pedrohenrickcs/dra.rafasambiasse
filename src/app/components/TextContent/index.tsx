'use client'

import { useState } from 'react'
import Modal from '../common/Modal'

export type ItemsContent = {
  title: string
  description: string
}

export type TextContentInfos = {
  title: string
  items: ItemsContent[]
}

export type TextContentProps = {
  items: TextContentInfos[]
}

export const TextContent = ({ items }: TextContentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ItemsContent | null>(null)

  const openModal = (item: ItemsContent) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setIsModalOpen(false)
  }

  return (
    <div className="w-full bg-primary-bg-color px-6 py-12 text-center flex flex-col items-center justify-center md:justify-around text-white-bg-color md:text-left">
      <h2 className="text-4xl font-bold">{items[0].title}</h2>

      <div className="container flex flex-col md:flex-row">
        {items[0]?.items?.map((item, i) => (
          <div key={i}>
            <div
              className="bg-white-bg-color text-secondary-text-color rounded-xl p-4 m-4 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <h3 className="text-xl font-medium text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3 className="text-xl font-medium text-center text-secondary-text-color">
            {selectedItem.title}
          </h3>
          <p className="py-3 text-center text-secondary-text-color">
            {selectedItem.description}
          </p>
        </Modal>
      )}
    </div>
  )
}
