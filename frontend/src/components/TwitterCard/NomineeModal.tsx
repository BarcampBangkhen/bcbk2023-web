import { Modal } from 'flowbite-react'
import React from 'react'
import { TweetInfo } from '../../models/TweetInfo'
import TwitterCard from '.'
import ImageCollage from './ImageCollage'
import User from './User'

export interface NomineeModalProps {
  show: boolean
  onClose: (state: boolean) => void
  nominee: TweetInfo
}

const NomineeModal = ({ show, onClose, nominee }: NomineeModalProps) => {
  return (
    <Modal show={show} onClose={() => onClose(false)}>
      <Modal.Header>Congratulations</Modal.Header>
      <Modal.Body>
        <div className="">
            <ImageCollage images={nominee.includes.media} />
            <div className="py-4 px-6">
              {nominee.includes.users.length > 0 && (
                <User user={nominee.includes.users[0]} />
              )}
              <p className="text-Falu100 pt-4">{nominee.data.text}</p>
            </div>
          </div>
      </Modal.Body>
    </Modal>
  )
}

export default NomineeModal
