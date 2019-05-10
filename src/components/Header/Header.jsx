// @flow
import React, {
  useState,
  useEffect,
} from 'react';
import {
  Flex,
  Text,
  Input,
} from 'web-styled';
import {
  searchNotice,
  convertToFormatDate,
} from 'web-utils';
import {
  HeaderContainer,
  AddNotification,
  Result,
  ResultItem,
} from './style';

type Props = {
    handleModalIsOpen: {(): void},
    handleSelectSearchNotice: {():void},
    noticed: Array,
}

const Header = ({
  handleModalIsOpen,
  noticed,
  handleSelectSearchNotice,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');


  useEffect(() => {
    if (searchTerm === '') {
      setResult([]);
    } else {
      setResult(searchNotice(noticed, searchTerm));
    }
  }, [searchTerm, noticed]);

  return (
    <HeaderContainer>
      <Flex
        width="50%"
        align="center"
        justify="space-around"
      >
        <AddNotification
          onClick={() => handleModalIsOpen()}
        >
                    Add notation
        </AddNotification>
      </Flex>
      <Flex
        width="50%"
        justify="center"
        align="center"
        column="column"
      >
        <Flex
          width="55%"
          justify="center"
          align="center"
        >
          <Input
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Events, people, descriptions, date..."
            value={searchTerm}
            width="80%"
            margin="initial"
          />
        </Flex>
      </Flex>
      <Flex
        width="100%"
        justify="flex-end"
      >
        <Flex
          width="50%"
          justify="center"
        >
          <Result
            veiw={!result.length}
          >
            {
                  result.length
                    ? (
                      result.map(item => (
                        <ResultItem
                          key={item.id}
                          complete={item.complete}
                          onClick={() => {
                            handleSelectSearchNotice(item.date);
                            setSearchTerm('');
                          }}
                        >
                          <Text
                            size="8px"
                            align="left"
                            margin="0 0 0 5px"
                            low="true"
                            cursor="true"
                          >
                            {`Event: ${item.event}`}
                          </Text>
                          <Text
                            size="8px"
                            align="left"
                            margin="0 0 0 5px"
                            low="true"
                            cursor="true"
                          >
                            {`Person: ${item.participans}`}
                          </Text>
                          <Text
                            size="8px"
                            align="left"
                            margin="0 0 0 5px"
                            low="true"
                            cursor="true"
                          >
                            {`Description: ${item.description}`}
                          </Text>
                          <Text
                            size="8px"
                            align="left"
                            margin="0 0 0 5px"
                            low="true"
                            cursor="true"
                          >
                            {`Date: ${convertToFormatDate(item.date)}`}
                          </Text>
                        </ResultItem>
                      ))

                    ) : null
              }
          </Result>
        </Flex>
      </Flex>
    </HeaderContainer>
  );
};


export default Header;
