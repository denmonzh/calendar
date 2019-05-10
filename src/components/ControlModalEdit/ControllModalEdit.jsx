// @flow

import React, {
  Fragment,
} from 'react';
import {
  Button,
} from 'web-styled';

type Props = {
    handleSaveChangeNotice: {():void},
    dataSave: object,
    current: object,
}

const ControlModalEdit = ({
  handleSaveChangeNotice,
  dataSave,
  current,
}: Props) => (
  <Fragment>
    <Button
      onClick={() => handleSaveChangeNotice({
        ...dataSave,
        complete: true,
      })}
    >
          Complete
    </Button>
    <Button
      close="#ffff00"
      onClick={() => handleSaveChangeNotice(dataSave)}
    >
            Save
    </Button>
    <Button
      close="#ff0000"
      onClick={() => handleSaveChangeNotice({
        id: dataSave.id,
        delete: true,
        date: current.selectedDate,
      })}
    >
          Delete
    </Button>
  </Fragment>
);

export default ControlModalEdit;
