// @flow
import React, {
  useState,
  useEffect,
} from 'react';
import Modal from 'react-modal';
import {
  Flex,
  Text,
  Input,
  Button,
  getCustomStyles,
} from 'web-styled';
import {
  ControlModalEdit,
} from 'web-components';
import {
  compareDate,
} from 'web-utils';
import {
  Body,
  Description,
} from './styled';


type Props = {
  isOpen: boolean,
  newNote: boolean,
  width: string,
  edit: object,
  current: object,
  onRequestClose: { (): void },
  handleAddNoticed: {(): void},
  handleSaveChangeNotice: {():void}
};

const MainModal = ({
  width,
  isOpen,
  newNote,
  edit,
  current,
  onRequestClose,
  handleAddNoticed,
  handleSaveChangeNotice,
}: Props) => {
  const [event, setEvent] = useState('');
  const [participans, setParticipants] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    if (!edit) {
      setEvent('');
      setParticipants('');
      setDescription('');
    } else if (newNote) {
      setEvent('');
      setParticipants('');
      setDescription('');
    } else if (compareDate(edit.date, current.selectedDate)) {
      setEvent(edit.event);
      setParticipants(edit.participans);
      setDescription(edit.description);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={getCustomStyles(width)}
      appElement={document.body}
    >
      <Body>
        <Text
          size="24px"
        >
                Notation
        </Text>
        <Input
          onChange={e => setEvent(e.target.value)}
          value={event}
          width="80%"
          margin="20px 0 0 0 "
          type="text"
          placeholder="Event..."
        />
        <Input
          onChange={e => setParticipants(e.target.value)}
          value={participans}
          width="80%"
          margin="20px 0 0 0 "
          type="text"
          placeholder="Participants..."
        />
        <Description
          onChange={e => setDescription(e.target.value)}
          value={description}
          placeholder="Description..."
          type="text"
          rows="5"
        />
        <Flex
          width="80%"
          justify="space-between"
          margin="0 auto"
        >
          {
              !edit || newNote
                ? (
                  <Button
                    onClick={() => handleAddNoticed({
                      event,
                      participans,
                      description,
                    })}
                  >
                          Add
                  </Button>
                )
                : (
                  <ControlModalEdit
                    handleSaveChangeNotice={handleSaveChangeNotice}
                    dataSave={{
                      id: edit.id,
                      date: edit.date,
                      event,
                      participans,
                      description,
                    }}
                  />
                )
            }
          <Button
            close
            onClick={onRequestClose}
          >
                    Close
          </Button>
        </Flex>
      </Body>
    </Modal>
  );
};

export default MainModal;
