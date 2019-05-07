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
}

const ControlModalEdit = ({
  handleSaveChangeNotice,
  dataSave,
}: Props) => (
  <Fragment>
    <Button
      onClick={() => handleSaveChangeNotice(dataSave)}
    >
            Save
    </Button>
    <Button
      onClick={() => handleSaveChangeNotice({
        id: dataSave.id,
        delete: true,
      })}
    >
          Delete
    </Button>
    <Button
      onClick={() => handleSaveChangeNotice({
        ...dataSave,
        complete: true,
      })}
    >
          Complete
    </Button>
  </Fragment>
);

export default ControlModalEdit;
